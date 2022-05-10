import React, {useMemo, useState} from 'react';
import {Scrollbars} from "react-custom-scrollbars";
import {Empty, Input} from "antd";
import ServicesList from "../components/services/ServicesList";
import ServicesItems from "../components/services/ServicesItems";

const Services = () => {
    const { Search } = Input;
    const [searchQuery, setSearchQuery] = useState('');

    const rooms = [
        { id: 123, name: 'Проверка документов', mess: '13 сервисов' },
        { id: 124, name: 'Задолженности', mess: '6 сервисов' },
        { id: 125, name: 'Проверка кредитных историй', mess: '3 сервиса' },
        { id: 126, name: 'Привлечение к ответственности', mess: '11 сервисов' },
        { id: 127, name: 'Недвижимость', mess: '8 сервисов' },
        { id: 127, name: 'Движимое имущество', mess: '6 сервисов' },
        { id: 128, name: 'Бизнес', mess: '12 сервисов' },
        { id: 129, name: 'Поиск физлиц', mess: '2 сервиса' },
        { id: 130, name: 'Другое', mess: '6 сервисов' },
    ]

    const searchedRooms = useMemo(() => {
        return rooms.filter(room => room.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery]);

    return (
        <div className="services-container">
            <div className="services__left">
                <div className="left-red-Line">Сервисы</div>
                <div className="room-search">
                    <Search placeholder="Поиск" onChange={e => setSearchQuery(e.target.value)} onSearch={setSearchQuery} bordered={false}/>
                </div>
                <div className="services-list">
                    <Scrollbars autoHide className="room-list-scroll">
                        {searchedRooms.length ?
                            <ServicesList services={searchedRooms}/>
                            :
                            <Empty />
                        }
                    </Scrollbars>
                </div>
            </div>
            <div className="services-main">
                <Scrollbars autoHide className="services-items">
                    <div className="service-about">
                        <div className="left-red-Line">Проверка документов <span className="count">13</span></div>
                        <div className="service-about__short-info">Ссылки на официальные государственные сайты<br/>
                            для проверки персональных документов, доверенностей,<br/> электронных подписей и другое.</div>
                        <ServicesItems/>
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
};

export default Services;