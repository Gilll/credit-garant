import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import ProfileMenu from "../components/profile/ProfileMenu";
import {Outlet} from "react-router";
import {Scrollbars} from "react-custom-scrollbars";
import IconLogOut from "../components/icons/IconLogOut";

const Profile = () => {
    const {user} = useTypedSelector(state => state.auth);
    return (
        <div className="profile-page">
            <div className="profile-menu-wrapper">
                <Scrollbars autoHide>
                    <div className="profile-page__title">Профиль</div>
                    <div className="profile-page__name">{user.name} {user.surname}</div>
                    <div className="profile-page__email">{user.mail}</div>
                    <ProfileMenu/>
                    <div className="profile-page__out-holder"></div>
                    <div className="profile-page__out">
                        <div className="profile-page__out-icon"><IconLogOut/></div>
                        <div className="profile-page__out-text">Выйти</div>
                    </div>
                </Scrollbars>
            </div>
            <div className="profile-content">
                <Scrollbars>
                    <Outlet/>
                </Scrollbars>
            </div>
        </div>
    );
};

export default Profile;