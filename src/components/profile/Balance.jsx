import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import masterCardLogo from "../../img/icons/master-card.png";
import PaymentAbout from "./PaymentAbout";

const Balance = () => {
    const {user} = useTypedSelector(state => state.auth);

    return (
        <div className="profile-container">
            <div className="left-red-Line">Мой баланс</div>
            <div className="balance-info">
                <div className="balance-info__left">
                    <div className="balance-info__left-title">На моем счете</div>
                    <div className="blance_layout">
                        <div className="blance_layout__bg">
                            <div className="blance_layout__frame">
                                <div className="blance_layout__account">
                                    <div className="blance_layout__account-text">40 344</div>
                                    <div className="blance_layout__account-s">₽</div>
                                </div>
                                <div className="blance_layout__desc">Текущий счет</div>
                                <div className="blance_layout__name">{user.surname} {user.name.charAt(0)}.{user.patronymic.charAt(0)}</div>
                            </div>
                            <div className="blance_layout__date">09/24</div>
                            <div className="blance_layout__cc-wrap">
                                <img className="blance_layout__card" src={masterCardLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="balance-info__left-title">Заработано за октябрь</div>
                    <div className="blance_layout-less">
                        <div className="blance_layout-less__bg">
                            <div className="blance_layout-less__frame">
                                <div className="blance_layout__account">
                                    <div className="blance_layout__account-text">0</div>
                                    <div className="blance_layout__account-s">₽</div>
                                </div>
                            </div>
                            <div className="blance_layout-less__count">2 сделки</div>
                        </div>
                    </div>
                </div>
                <div className="balance-info__right">
                    <div className="balance-events__title">
                        <div className="left-red-Line less">События</div>
                    </div>
                    <div className="balance-events__empty">
                        <div className="balance-events__empty-text">К сожалению, у вас ещё не было ни одного перевода или любого другого события.</div>
                        <div className="balance-events__empty-text2">Чтобы узнать как получить выплату, смотрите этапы получения бонусов ниже</div>
                    </div>
                </div>
            </div>
            <div className="left-red-Line less">Как получить выплату</div>
            <PaymentAbout/>
        </div>
    );
};

export default Balance;