import React, {useState} from 'react';
import {Select, Steps} from "antd";
import ArrLeft from "../components/icons/ArrLeft";
import Sms from "../components/icons/Sms";
import CallCalling from "../components/icons/CallCalling";
import RequestsShortList from "../components/requests/RequestsShortList";
import alpha from "../img/icons/alpha.png"
import RequestHeader from "../components/requests/RequestHeader";
import RequestWraning from "../components/requests/RequestWraning";
import CreditForm from "../components/requests/CreditForm";
import Members from "../components/requests/Members";
const Requests = () => {
    const tpmJSON = {
        work: [
            { id: 144, logo: alpha, bankName: 'Альфа Банк', rate: '10,56', sum: '7 505 000', stage: 'Анкета', stageStatus: '' },
            { id: 145, logo: alpha, bankName: 'Альфа Банк', rate: '22', sum: '47 505 000', stage: 'Анкета', stageStatus: 'Отказ' }
        ],
        pause: [
            { id: 146, logo: alpha, bankName: 'Альфа Банк', rate: '13', sum: '37 505 000', stage: 'Анкета', stageStatus: 'Отказ' }
        ],
        cancel: [
            { id: 147, logo: alpha, bankName: 'Альфа Банк', rate: '31', sum: '72 505 000', stage: 'Анкета', stageStatus: 'Отказ' },
            { id: 148, logo: alpha, bankName: 'Альфа Банк', rate: '11', sum: '17 505 000', stage: 'Анкета', stageStatus: 'Отказ' },
            { id: 149, logo: alpha, bankName: 'Альфа Банк', rate: '22', sum: '73 505 000', stage: 'Анкета', stageStatus: 'Отказ' }
        ]
    }
    const [membersArr, setMembersArr] = useState([
        { firstName: 'Valera' },
        { role: 'co-borrower' }
    ])

    const { Step } = Steps;
    const { Option } = Select;
    const [requestsFilter, setRequestsFilter] = useState("work");
    const [userRequests, setUserRequests] = useState(tpmJSON["work"]);
    const [activeItem, setActiveItem] = useState(0);

    const onChangeFilter = (filter) => {
        setRequestsFilter(filter);
        setUserRequests(tpmJSON[filter]);
        setActiveItem(0);
    }

    const changeActive = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="requests-container">
            <div className="requests-container__left">
                <div className="back-to-page">
                    <ArrLeft/>
                    <span>К списку заявок</span>
                </div>
                <div className="requests-short-list">
                    <div className="requests-short-list__last-name">Тареченкова</div>
                    <div className="requests-short-list__name">Александра Константиновна</div>
                    <div className="requests-short-list__actions">
                        <Select
                            defaultValue="work"
                            dropdownClassName="with-radio"
                            className={{
                                'work': "request-status",
                                'pause': "request-status yellow",
                                'cancel': "request-status red"
                            }[requestsFilter]}
                            onChange={onChangeFilter}
                        >
                            <Option value="work">
                                <span className="checkmark"></span>
                                <span>В работе</span>
                            </Option>
                            <Option value="pause">
                                <span className="checkmark"></span>
                                <span>На паузе</span>
                            </Option>
                            <Option value="cancel">
                                <span className="checkmark"></span>
                                <span>Отменено</span>
                            </Option>
                        </Select>
                        <Sms/>
                        <CallCalling/>
                    </div>
                    <RequestsShortList requests={userRequests} changeActive={changeActive} activeItem={activeItem}/>
                </div>
            </div>
            <div className="requests-container__container">
                <div className="user-request">
                    <RequestHeader requestProps={tpmJSON[requestsFilter][activeItem]}/>
                    {{
                        'pause': <RequestWraning text="10 декабря 2021 поставили заявку на паузу"/>,
                        'cancel': <RequestWraning text="10 декабря 2021 отменили заявку"/>
                    }[requestsFilter]}
                    <div className="left-red-Line">Заполните анкету</div>
                    <div className="user-request__text-gray">
                        Укажите информацию об участниках и загрузите документы,<br/>чтобы отправить анкету на рассмотрение в банк
                    </div>
                    <CreditForm/>
                    <Members membersList={membersArr}/>
                    <div className="btn-add-user__wrap">
                        <div className="btn-add-user" onClick={() => setMembersArr([...membersArr, { role: 'co-borrower' }])}>
                            <div className="btn-add-user__icon"><span>+</span></div>Добавить участника
                        </div>
                    </div>
                </div>
            </div>
            <div className="requests-container__right">
                <div className="requests-container__right-title">Этапы</div>
                <Steps progressDot current={1} direction="vertical">
                    <Step status="finish" title="Расчёт"/>
                    <Step status="process" title="Анкета"/>
                    <Step status="wait" title="Недвижимость"/>
                    <Step status="wait" title="Страхование"/>
                    <Step status="wait" title="Сделка"/>
                    <Step status="wait" title="Бонус"/>
                </Steps>
            </div>
        </div>
    );
};

export default Requests;