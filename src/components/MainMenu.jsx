import React from 'react';
import { Switch } from 'antd';
import {Link, NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <header>
            <div className="header__top">
                <div className="menu-logo">
                    <Link to="/">Кредит</Link>
                    <Link to="/">Гарант</Link>
                </div>
                <nav className="main-menu">
                    <NavLink to="/calc" className="main-menu__item">
                        <div className="main-menu__layout">
                            <div className="main-menu__icon">
                                <svg className="icon-calc" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.75V21.25C26.25 25 24.375 27.5 20 27.5H10C5.625 27.5 3.75 25 3.75 21.25V8.75C3.75 5 5.625 2.5 10 2.5H20C24.375 2.5 26.25 5 26.25 8.75Z"/>
                                    <path d="M20.3125 13.75H9.6875C8.4875 13.75 7.5 12.7625 7.5 11.5625V8.4375C7.5 7.2375 8.4875 6.25 9.6875 6.25H20.3125C21.5125 6.25 22.5 7.2375 22.5 8.4375V11.5625C22.5 12.7625 21.5125 13.75 20.3125 13.75Z"/>
                                    <path d="M11.625 19.1001L8.75 21.9751"/>
                                    <path d="M8.78906 19.1377L11.664 22.0127"/>
                                    <path className="s2" d="M17.5 19.1626H17.525"/>
                                    <path className="s2" d="M21.25 19.1626H21.275"/>
                                    <path className="s2" d="M17.5 21.8751V21.8501"/>
                                    <path className="s2" d="M21.25 21.8751V21.8501"/>
                                </svg>
                            </div>
                            <div className="main-menu__link">
                                <span>Калькулятор</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/requests" className="main-menu__item">
                        <div className="main-menu__layout">
                            <div className="main-menu__icon">
                                <svg className="icon-docs" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 15.25H18.75"/>
                                    <path d="M10 20.25H15.475"/>
                                    <path d="M12.5 7.5H17.5C20 7.5 20 6.25 20 5C20 2.5 18.75 2.5 17.5 2.5H12.5C11.25 2.5 10 2.5 10 5C10 7.5 11.25 7.5 12.5 7.5Z"/>
                                    <path d="M20 5.0249C24.1625 5.2499 26.25 6.7874 26.25 12.4999V19.9999C26.25 24.9999 25 27.4999 18.75 27.4999H11.25C5 27.4999 3.75 24.9999 3.75 19.9999V12.4999C3.75 6.7999 5.8375 5.2499 10 5.0249"/>
                                </svg>
                            </div>
                            <div className="main-menu__link">
                                <span>Заявки</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/learning" className="main-menu__item">
                        <div className="main-menu__layout">
                            <div className="main-menu__icon">
                                <svg className="icon-learning" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5609 3.16261L5.03594 8.07511C2.62344 9.65011 2.62344 13.1751 5.03594 14.7501L12.5609 19.6626C13.9109 20.5501 16.1359 20.5501 17.4859 19.6626L24.9734 14.7501C27.3734 13.1751 27.3734 9.66261 24.9734 8.08761L17.4859 3.17511C16.1359 2.27511 13.9109 2.27511 12.5609 3.16261Z"/>
                                    <path d="M7.03594 16.3501L7.02344 22.2126C7.02344 23.8001 8.24844 25.5001 9.74844 26.0001L13.7359 27.3251C14.4234 27.5501 15.5609 27.5501 16.2609 27.3251L20.2484 26.0001C21.7484 25.5001 22.9734 23.8001 22.9734 22.2126V16.4126"/>
                                    <path d="M26.75 18.75V11.25"/>
                                </svg>
                            </div>
                            <div className="main-menu__link">
                                <span>Обучение</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/services" className="main-menu__item">
                        <div className="main-menu__layout">
                            <div className="main-menu__icon">
                                <svg className="icon-docs" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 15.25H18.75"/>
                                    <path d="M10 20.25H15.475"/>
                                    <path d="M12.5 7.5H17.5C20 7.5 20 6.25 20 5C20 2.5 18.75 2.5 17.5 2.5H12.5C11.25 2.5 10 2.5 10 5C10 7.5 11.25 7.5 12.5 7.5Z"/>
                                    <path d="M20 5.0249C24.1625 5.2499 26.25 6.7874 26.25 12.4999V19.9999C26.25 24.9999 25 27.4999 18.75 27.4999H11.25C5 27.4999 3.75 24.9999 3.75 19.9999V12.4999C3.75 6.7999 5.8375 5.2499 10 5.0249"/>
                                </svg>
                            </div>
                            <div className="main-menu__link">
                                <span>Сервисы</span>
                            </div>
                        </div>
                    </NavLink>
                </nav>
            </div>
            <div className="header_bottom">
                <div className="main-menu-more">
                    <div className="main-menu-more__item">
                        <div className="main-menu-more__row">
                            <div className="main-menu-more__icon">
                                <svg className="icon-chat" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5 7.8125V14.1875C27.5 15.775 26.975 17.1125 26.0375 18.0375C25.1125 18.975 23.775 19.5 22.1875 19.5V21.7625C22.1875 22.6125 21.2375 23.125 20.5375 22.65L19.325 21.85C19.4375 21.4625 19.4875 21.0375 19.4875 20.5875V15.5C19.4875 12.95 17.7875 11.25 15.2375 11.25H6.74999C6.57499 11.25 6.4125 11.2625 6.25 11.275V7.8125C6.25 4.625 8.375 2.5 11.5625 2.5H22.1875C25.375 2.5 27.5 4.625 27.5 7.8125Z"/>
                                    <path d="M19.4875 15.5V20.5875C19.4875 21.0375 19.4375 21.4625 19.325 21.85C18.8625 23.6875 17.3375 24.8375 15.2375 24.8375H11.8375L8.0625 27.35C7.5 27.7375 6.74999 27.325 6.74999 26.65V24.8375C5.47499 24.8375 4.4125 24.4125 3.675 23.675C2.925 22.925 2.5 21.8625 2.5 20.5875V15.5C2.5 13.125 3.975 11.4875 6.25 11.275C6.4125 11.2625 6.57499 11.25 6.74999 11.25H15.2375C17.7875 11.25 19.4875 12.95 19.4875 15.5Z"/>
                                </svg>
                            </div>
                            <div className="main-menu-more__text">
                                <a href="/">Чат</a>
                            </div>
                            <div className="main-menu-more__active-mess">2</div>
                        </div>
                    </div>
                    <div className="main-menu-more__item">
                        <div className="main-menu-more__row main-menu-more__row--popup">
                            <div className="main-menu-more__icon">
                                <svg className="icon-help" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="s2" d="M21.25 23.0377H16.25L10.6875 26.7376C9.86248 27.2876 8.75 26.7002 8.75 25.7002V23.0377C5 23.0377 2.5 20.5377 2.5 16.7877V9.2876C2.5 5.5376 5 3.0376 8.75 3.0376H21.25C25 3.0376 27.5 5.5376 27.5 9.2876V16.7877C27.5 20.5377 25 23.0377 21.25 23.0377Z"/>
                                    <path d="M15.0007 14.2002V13.9377C15.0007 13.0877 15.5258 12.6377 16.0508 12.2752C16.5633 11.9252 17.0757 11.4752 17.0757 10.6502C17.0757 9.50024 16.1507 8.5752 15.0007 8.5752C13.8507 8.5752 12.9258 9.50024 12.9258 10.6502"/>
                                    <path d="M14.9944 17.1875H15.0056"/>
                                </svg>
                            </div>
                            <div className="main-menu-more__text">
                                <span>Помощь</span>
                            </div>
                        </div>
                        <div className="main-menu-more__row main-menu-more__row--popup">
                            <div className="main-menu-more__icon">
                                <svg className="icon-profile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1484 15.9751C15.0609 15.9626 14.9484 15.9626 14.8484 15.9751C12.6484 15.9001 10.8984 14.1001 10.8984 11.8876C10.8984 9.6251 12.7234 7.7876 14.9984 7.7876C17.2609 7.7876 19.0984 9.6251 19.0984 11.8876C19.0859 14.1001 17.3484 15.9001 15.1484 15.9751Z"/>
                                    <path d="M23.4242 24.2252C21.1992 26.2627 18.2492 27.5002 14.9992 27.5002C11.7492 27.5002 8.79922 26.2627 6.57422 24.2252C6.69922 23.0502 7.44922 21.9002 8.78672 21.0002C12.2117 18.7252 17.8117 18.7252 21.2117 21.0002C22.5492 21.9002 23.2992 23.0502 23.4242 24.2252Z"/>
                                    <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"/>
                                </svg>
                            </div>
                            <div className="main-menu-more__text">
                                <span>Профиль</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu-more__item">
                        <div className="main-menu-more__row">
                            <div className="main-menu-more__text">
                                <a href="/">Бонус</a>
                            </div>
                            <div className="main-menu-more__switch">
                                <Switch defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainMenu;