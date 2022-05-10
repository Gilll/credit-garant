import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import IconProfileEdit from "../icons/IconProfileEdit";
import ProfileUserInfo from "./ProfileUserInfo";
import {Button, Input} from "antd";
import API from "../../router/apiConfig";
import {AuthActionCreators} from "../../store/redusers/auth/action-creators";
import {useDispatch} from "react-redux";
import ProfileCancal from "../icons/ProfileCancal";

const ProfileSettings = () => {
    const dispatch = useDispatch();
    const {user} = useTypedSelector(state => state.auth);
    const [editUserInfo, setEditUserInfo] = useState(false);
    const [editPass, setEditPass] = useState(false);
    const [userData, setUserData] = useState(user);
    const [userDataLoading, setUserDataLoading] = useState(false);

    const sendUserData = () => {
        setUserDataLoading(true);
        API.post('/profile/edit',  userData ).then(function () {
            dispatch(AuthActionCreators.setUser(userData));
        }).catch(function (error) {
            console.log(error.response);
        }).then(() => {
            setUserDataLoading(false)
        });
    }

    return (
        <div className="profile-container">
            <div className="left-red-Line">Настройки профиля</div>
            <div className="profile-user-info">
                <div className="profile-user-info__short">
                    <div className="profile-user-info__short-left">
                        <div className="profile-user-info__credential">
                            <div className="profile-user-info__photo"></div>
                            <div className="profile-user-info__wrap">
                                <div className="profile-user-info__name">{user.name} {user.surname}</div>
                                <div className="profile-user-info__id">id 6548735486</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-user-info__short-right">
                        <div className="profile-user-info__requests">
                            <div className="profile-user-info__requests-col">
                                <div className="profile-user-info__requests-box">
                                    <div className="profile-user-info__count">3</div>
                                    <div className="profile-user-info__desc">
                                        <div className="profile-user-info__text">заявки <br/>в работе</div>
                                        <div className="profile-user-info__line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-user-info__requests-col">
                                <div className="profile-user-info__requests-box">
                                    <div className="profile-user-info__count">6</div>
                                    <div className="profile-user-info__desc">
                                        <div className="profile-user-info__text">выданных заявок</div>
                                        <div className="profile-user-info__line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__title">
                    <div className="left-red-Line less">Общие данные</div>
                    {editUserInfo ?
                        <div className="profile__edit" onClick={() => setEditUserInfo(false)}>
                            <div className="profile__edit-icon">
                                <ProfileCancal/>
                            </div>
                            <div className="profile__edit-text">Отменить</div>
                        </div>
                        :
                        <div className="profile__edit" onClick={() => setEditUserInfo(true)}>
                            <div className="profile__edit-icon">
                                <IconProfileEdit/>
                            </div>
                            <div className="profile__edit-text">Редактировать</div>
                        </div>
                    }
                </div>
                {editUserInfo ?
                    <div className="form-user-info form-field">
                        <div className="form-field__row form-field__row--flex label-on-top">
                            <div className="form-field__col3">
                                <label>Имя</label>
                                <Input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value})} defaultValue={user.name}/>
                            </div>
                            <div className="form-field__col3">
                                <label>Фамилия</label>
                                <Input value={userData.surname} onChange={(e) => setUserData({ ...userData, surname: e.target.value})} defaultValue={user.surname}/>
                            </div>
                            <div className="form-field__col3">
                                <label>Отчество</label>
                                <Input value={userData.patronymic} onChange={(e) => setUserData({ ...userData, patronymic: e.target.value})} defaultValue={user.patronymic}/>
                            </div>
                        </div>
                        <div className="form-field__row form-field__row--flex label-on-top">
                            <div className="form-field__col3">
                                <label>Телефон</label>
                                <Input/>
                            </div>
                            <div className="form-field__col3">
                                <label>Дата рождения</label>
                                <Input/>
                            </div>
                            <div className="form-field__col3">
                                <label>Город</label>
                                <Input/>
                            </div>
                        </div>
                        <div className="form-field__row form-field__row--flex label-on-top">
                            <div className="form-field__col2 col2-padding">
                                <label>Email</label>
                                <Input value={userData.mail} onChange={(e) => setUserData({ ...userData, mail: e.target.value})} defaultValue={user.mail}/>
                            </div>
                            <div className="form-field__col2 col2-padding">
                                <label>Адрес</label>
                                <Input/>
                            </div>
                        </div>
                        <div className="form-user-info__action">
                            <Button type="primary" htmlType="button" onClick={() => sendUserData()} loading={userDataLoading}>Сохранить изменения</Button>
                        </div>
                    </div>
                    :
                    <ProfileUserInfo/>
                }
                <div className="profile__title">
                    <div className="left-red-Line less">Пароль</div>
                    <div className="profile__title-text">Последний раз был обновлен 2 года назад</div>
                    {editPass ?
                        <div className="profile__edit" onClick={() => setEditPass(false)}>
                            <div className="profile__edit-icon">
                                <ProfileCancal/>
                            </div>
                            <div className="profile__edit-text">Отменить</div>
                        </div>
                        :
                        <div className="profile__edit" onClick={() => setEditPass(true)}>
                            <div className="profile__edit-icon">
                                <IconProfileEdit/>
                            </div>
                            <div className="profile__edit-text">Редактировать</div>
                        </div>
                    }
                </div>
                {editPass ?
                    <div className="edit-pass-form form-field">
                        <div className="form-field__row form-field__row--flex label-on-top">
                            <div className="form-field__col3">
                                <label>Старый пароль</label>
                                <Input.Password/>
                            </div>
                            <div className="form-field__col3">
                                <label>Новый пароль</label>
                                <Input.Password/>
                            </div>
                            <div className="form-field__col3">
                                <label>Повторите пароль</label>
                                <Input.Password/>
                            </div>
                        </div>
                        <div className="form-user-info__action">
                            <Button type="primary" htmlType="button" onClick={() => sendUserData()} loading={userDataLoading}>Сохранить изменения</Button>
                        </div>
                    </div>
                    :
                    <div className="edit-pass-holder"></div>
                }
                <div className="left-red-Line less">Юридическая информация</div>
                <div className="profile-ur-info">
                    <div className="profile-ur-info__desc">Для работы с нашим сервисом, необходимо быть ознакомленым со всей юридической информацией</div>
                    <div className="profile-ur-info__row">
                        <div className="profile-ur-info__col">
                            <div className="profile-ur-info__text">Соглашение об условиях использования платформы</div>
                            <div className="btn btn-red">Подробнее</div>
                            <div className="profile-ur-info__img">
                                <img src="/img/clipboard-tick.png" alt=""/>
                            </div>
                        </div>
                        <div className="profile-ur-info__col">
                            <div className="profile-ur-info__text">Соглашение об условиях использования платформы</div>
                            <div className="btn btn-red">Подробнее</div>
                            <div className="profile-ur-info__img">
                                <img src="/img/security-safe.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;