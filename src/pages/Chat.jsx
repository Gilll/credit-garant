import React, {useEffect, useMemo, useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {Empty, Input} from 'antd';
import RoomList from "../components/chat/RoomList";
import {Outlet, useParams} from "react-router";
import Stomp from "../utils/stomp";
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
    const { Search } = Input;
    const [searchQuery, setSearchQuery] = useState('');

    const [rooms, setRooms] = useState([])
    const [roomsLoading, setRoomsLoading] = useState(true)
    const [outletState, setOutletState] = useState({
        messageText: '',
        receivedMessage: {
            content: '',
            dialogId: 0,
            files: null,
            forwardedMessages: null,
            messageId: 0,
            sender: {
                avatar: '',
                email: '',
                firstName: '',
                lastName: '',
                userId: 0,
                username: '',
            },
            timestamp: '',
            type: '',
            uniqueCode: ''
        }
    });
    const [stomp, setStomp] = useState(null);
    const [sockConnected, setSockConnected] = useState(false);
    const roomId = useParams();

    const searchedRooms = useMemo(() => {
        return rooms.filter(room => room.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, rooms]);

    const hostname = 'https://chatdev.mayabiorobotics.com'
    const  loginUser = async (login, pass) => {
        let resp = ''
        const data = {
            username: login,
            password: pass
        }
        try {
            const response = await fetch('http://localhost:8089/alfa-mortgage/chat/signin', {
                crossDomain: true,
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
                //headers: {'Content-Type': 'multipart/form-data; boundary=something'}
            });
            resp = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
        return resp;
    }

    const getRooms = async () => {
        let resp = '';
        try {
            const response = await fetch(hostname + '/api/dialogs', {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('jwtToken')
                }
            });
            resp = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
        return resp;
    }

    const notificationConnect = (add) => {
        let url = "wss://chatdev.mayabiorobotics.com:15673/ws", sc;

        console.log("Go")
        sc = Stomp.client(url);
        setStomp(sc);
        sc.heartbeat.outgoing = 10000; // client will send heartbeats every 20000ms
        sc.heartbeat.incoming = 10000;
        sc.connect('test', 'test', onConnectedNotif, onErrorNotif);
    }

    const onConnectedNotif = (resp) => {
        setSockConnected(true);
        loginUser('doropheychik.viacheslav@gmail.com', '12345').then(resp => {
            localStorage.setItem('jwtToken', resp.jwtToken)
            localStorage.setItem('exchangeName', resp.exchangeName)
            getRooms().then(chatRooms => {
                console.log(chatRooms);
                setRooms(chatRooms);
                console.log(rooms);
                setRoomsLoading(false);
            });
        });
    }

    const onMessageReceived = (payload) => {
        payload.ack();
        let message = JSON.parse(payload.body);
        setOutletState({ ...outletState, receivedMessage: message.payload });
        console.log(payload.body);
        console.log(rooms);
    }

    const onErrorNotif = (error) => {
        console.log("fail")
        console.log('STOMP: ' + error);
        //stomp.disconnect();
        setStomp(null);
        setSockConnected(false);
        setTimeout( () => {notificationConnect()}, 5000);
        console.log('STOMP: Reconecting in 5 seconds');
        console.log("try");
    }

    const AddNewMessage = (message) => {
        let rabbitMessage = {
            type: "MESSAGE",
            payload: message
        }
        stomp.send(
            "/queue/chat-application-messages",
            {"Authorization": "Bearer " + localStorage.getItem('jwtToken')},
            JSON.stringify(rabbitMessage)
        );
    }

    const outletcb = (mess) => {
        console.log(mess);
    }

    useEffect(() => {
        let cleanupFunction = false;
        if(!cleanupFunction) notificationConnect();
        return () => cleanupFunction = true;
    },[])

    useEffect(() => {
        let cleanupFunction = false;
        if (sockConnected && stomp !== null) {
            console.log('cleanupFunction: ' + cleanupFunction);
            if (!localStorage.getItem('uuid')) {
                localStorage.setItem('uuid', uuidv4())
            }
            if(!cleanupFunction) stomp.subscribe('/exchange/' + localStorage.getItem('exchangeName'), onMessageReceived,
                {
                    "id": "sub", "auto-delete": false, "x-queue-name": localStorage.getItem('uuid'), "ack": "client"
                });
        }
        return () => cleanupFunction = true;
    },[stomp, sockConnected])

    useEffect(() => {
        if (outletState.messageText !== '') {
            AddNewMessage({ content: outletState.messageText, dialogId: roomId.id, uniqueCode: new Date().valueOf() });
            setOutletState({...outletState, messageText: ''})
        }
    },[outletState.messageText])

    useEffect(() => {
        let updatedRoom, oldStateRoom, oldRooms;

        oldStateRoom = rooms.filter(room => room.dialogId === outletState.receivedMessage.dialogId);
        if (oldStateRoom.length) {
            updatedRoom = oldStateRoom[0];
            oldRooms = rooms.filter(room => room.dialogId !== outletState.receivedMessage.dialogId);
            updatedRoom.content = outletState.receivedMessage.content;
            updatedRoom.lastSender = outletState.receivedMessage.sender;
            updatedRoom.timestamp = outletState.receivedMessage.timestamp;
            setRooms([updatedRoom, ...oldRooms]);
        }

    },[outletState.receivedMessage])

    return (
            <div className="chat">
                <div className="chat__left">
                    <div className="left-red-Line">Чат</div>
                    <div className="room-search">
                        <Search placeholder="Поиск" onChange={e => setSearchQuery(e.target.value)} onSearch={setSearchQuery} bordered={false}/>
                    </div>
                    {roomsLoading
                        ?
                            <div>Загрузка...</div>
                        :
                            <div className="room-list">
                                <Scrollbars autoHide className="room-list-scroll">
                                    {searchedRooms.length ?
                                        <RoomList rooms={searchedRooms}/>
                                        :
                                        <Empty />
                                    }
                                </Scrollbars>
                            </div>
                    }
                </div>
                <Outlet context={[outletState, setOutletState]} outletcb={outletcb}/>
            </div>

    );
};

export default Chat;