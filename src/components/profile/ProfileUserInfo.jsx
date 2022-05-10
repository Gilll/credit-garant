import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfileUserInfo = () => {
    const {user} = useTypedSelector(state => state.auth);

    return (
        <div className="profile-user-data__wrap">
            <div className="profile-user-data">
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Имя</div>
                    <div className="profile-user-data__field">{user.name}</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Фамилия</div>
                    <div className="profile-user-data__field">{user.surname}</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Отчество</div>
                    <div className="profile-user-data__field">{user.patronymic}</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Email</div>
                    <div className="profile-user-data__field">{user.mail}</div>
                </div>
            </div>
            <div className="profile-user-data">
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Телефон</div>
                    <div className="profile-user-data__field">+7 900 999-44-44</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Дата рождения</div>
                    <div className="profile-user-data__field">14.04.1984</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Город</div>
                    <div className="profile-user-data__field">Москва</div>
                </div>
                <div className="profile-user-data__col">
                    <div className="profile-user-data__label">Адрес</div>
                    <div className="profile-user-data__field">Большая Семеновская, 38</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserInfo;