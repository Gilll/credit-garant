import React from 'react';
import {Progress} from "antd";

const RequestSubItem = ({itemList}) => {
    return (
        <>
            <div className="requests-sub requests-sub--header">
                <div className="requests-sub__num">№</div>
                <div className="requests-sub__bank">Банк</div>
                <div className="requests-sub__params">Параметры кредита</div>
                <div className="requests-sub__bonus">Бонус</div>
                <div className="requests-sub__status">Статус</div>
                <div className="requests-sub__dead-line">Дедлайн</div>
            </div>
            {itemList.map(subItem =>
                <div className="requests-sub requests-sub--item" key={subItem.id}>
                    <div className="requests-sub__num">
                        <div className="requests-sub__id">{subItem.id}</div>
                        <div className="requests-sub__date">{subItem.date}</div>
                    </div>
                    <div className="requests-sub__bank">
                        <div className="requests-sub__bank-wrap">
                            <div className="requests-sub__bank-logo"><img src={subItem.bankLogo} alt=''/></div>
                            <div className="requests-sub__bank-name">{subItem.bank}</div>
                        </div>
                    </div>
                    <div className="requests-sub__params">
                        <div className="requests-sub__sum"><span className="text-gray">Сумма:</span> {subItem.summ}</div>
                        <div className="requests-sub__rate"><span className="text-gray">Ставка:</span> {subItem.rate}</div>
                    </div>
                    <div className="requests-sub__bonus">{subItem.bonus}</div>
                    <div className="requests-sub__status">
                        <div>{subItem.step}</div>
                        <div><span className="text-gray">Заполнение анкеты</span></div>
                        <Progress percent={subItem.finished} status="active" />
                    </div>
                    <div className="requests-sub__dead-line"></div>
                </div>
            )}
        </>
    );
};

export default RequestSubItem;