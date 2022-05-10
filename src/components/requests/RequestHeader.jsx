import React from 'react';

const RequestHeader = ({requestProps}) => {
    return (
        <div className="ur-header">
            <div className="ur-header__title">
                <div className="ur-header__icon">
                    <img src={requestProps.logo} alt=""/>
                </div>
                <div className="ur-header__text">№ {requestProps.id} - {requestProps.bankName}</div>
            </div>
            <div className="ur-header__props">
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">Ставка: </span>
                    <span>{requestProps.rate}</span>
                </div>
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">Сумма: </span>
                    <span>{requestProps.sum}</span>
                </div>
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">Уровень ЗП: </span>
                    <span>120 000₽</span>
                </div>
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">Переплата: </span>
                    <span>20 505 427₽</span>
                </div>
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">ЕП: </span>
                    <span>85 615₽</span>
                </div>
                <div className="ur-header__props-item">
                    <span className="ur-header__props-name">Бонус: </span>
                    <span>55 844₽</span>
                </div>
            </div>
        </div>
    );
};

export default RequestHeader;