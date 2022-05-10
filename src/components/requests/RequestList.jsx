import React from 'react';
import RequestsFilter from "./RequestsFilter";
import RequestsListItem from "./RequestsListItem";
import {Tabs} from "antd";
import alpha from "../../img/icons/alpha.png";
import RequestsEmpty from "./RequestsEmpty";

const RequestList = () => {
    const { TabPane } = Tabs;

    const tmpJson = [
        { shortName: 'ТА', name: 'Тареченкова А.К.', step: 'До сделки', shortInfo: 'Ипотека, готовое жильё',
            subs: [
                { id: '00144', date: '20 янв', bank: 'Альфа Банк', bankLogo: alpha, summ: '7 505 000 ₽', rate: '10,45%', bonus: '~ 29 354 ₽', step: 'Анкета', finished: '33' },
                { id: '00145', date: '20 янв', bank: 'Альфа Банк', bankLogo: alpha, summ: '7 505 000 ₽', rate: '10,45%', bonus: '~ 29 354 ₽', step: 'Анкета', finished: '33' }
            ]
        },
        { shortName: 'ИИ', name: 'Иванов И.И.', step: 'До сделки', shortInfo: 'Ипотека, готовое жильё',
            subs: [
                { id: '00146', date: '20 янв', bank: 'Альфа Банк', bankLogo: alpha, summ: '7 505 000 ₽', rate: '10,45%', bonus: '~ 29 354 ₽', step: 'Анкета', finished: '33' }
            ]
        }
    ]

    function callback(key) {

    }
    return (
        <div className="request-list">
            <RequestsFilter/>
            <Tabs defaultActiveKey="1" onChange={callback} className='requests-tabs' animated={true}>
                <TabPane tab={<><span>В работе</span><span className='count'>2</span></>} key="1">
                    <RequestsListItem data={tmpJson}/>
                </TabPane>
                <TabPane tab={<><span>Под наблюдением</span><span className='count'>0</span></>} key="2">
                    <RequestsEmpty
                        text='Нет заявок под наблюдением'
                        description='Если вы поставите заявку на паузу, она будет храниться здесь'
                    />
                </TabPane>
                <TabPane tab={<><span>На паузе</span><span className='count'>0</span></>} key="3">
                    <RequestsEmpty
                        text='Нет заявок на паузе'
                        description='Если вы поставите заявку на паузу, она будет храниться здесь'
                    />
                </TabPane>
                <TabPane tab={<><span>Отменено</span><span className='count'>0</span></>} key="4">
                    <RequestsEmpty
                        text='Нет отмененных заявок'
                        description='Если вы поставите заявку на паузу, она будет храниться здесь'
                    />
                </TabPane>
                <TabPane tab={<><span>Выдано</span><span className='count'>0</span></>} key="5">
                    <RequestsEmpty
                        text='Нет выданых заявок'
                        description='Если вы поставите заявку на паузу, она будет храниться здесь'
                    />
                </TabPane>
            </Tabs>

        </div>
    );
};

export default RequestList;