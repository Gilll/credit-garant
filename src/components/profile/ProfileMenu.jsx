import React from 'react';
import {RouteNames} from "../../router";
import {NavLink} from "react-router-dom";

const ProfileMenu = () => {
    const menuItems = [
        { title: 'Мой баланс', link: RouteNames.BALANCE },
        { title: 'Реквизиты', link: RouteNames.REQUISITES },
        { title: 'Реферальная программа', link: RouteNames.REFERPROGRAMM },
        { title: 'Настройки профиля', link: RouteNames.PROFILE_SETTING }
    ]
    return (
        <div className="profile-menu">
            {menuItems.map((item, index) =>
                <NavLink to={item.link} key={index}>
                    <div className="profile-menu__item">{item.title}</div>
                </NavLink>
            )}
        </div>
    );
};

export default ProfileMenu;