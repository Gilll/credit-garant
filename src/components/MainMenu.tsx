import React from 'react';
import { Switch } from 'antd';
import {Link, NavLink} from "react-router-dom";
import {RouteNames} from "../router/index";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/redusers/auth/action-creators";
import {useDispatch} from "react-redux";

const MainMenu = () => {
    const dispatch = useDispatch();
    const {user} = useTypedSelector(state => state.auth);
    const logout = () => {
        dispatch(AuthActionCreators.logout());
    }
    return (
        <header>
            <div className="header__top">
                <div className="menu-logo">
                    <Link to={RouteNames.INTRO}>Кредит</Link>
                    <Link to={RouteNames.INTRO}>Гарант</Link>
                </div>
                <nav className="main-menu">
                    <NavLink to={RouteNames.CALC} className="main-menu__item">
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
                    <NavLink to={RouteNames.REQUESTS} className="main-menu__item">
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
                    <NavLink to={RouteNames.LEARNING} className="main-menu__item">
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
                    <NavLink to={RouteNames.SERVICES} className="main-menu__item">
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
                    <div className="main-menu">
                        <NavLink to={RouteNames.CHAT} className="main-menu__item">
                            <div className="main-menu__layout">
                                <div className="main-menu__icon">
                                    <svg className="icon-chat" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.5 7.8125V14.1875C27.5 15.775 26.975 17.1125 26.0375 18.0375C25.1125 18.975 23.775 19.5 22.1875 19.5V21.7625C22.1875 22.6125 21.2375 23.125 20.5375 22.65L19.325 21.85C19.4375 21.4625 19.4875 21.0375 19.4875 20.5875V15.5C19.4875 12.95 17.7875 11.25 15.2375 11.25H6.74999C6.57499 11.25 6.4125 11.2625 6.25 11.275V7.8125C6.25 4.625 8.375 2.5 11.5625 2.5H22.1875C25.375 2.5 27.5 4.625 27.5 7.8125Z"/>
                                        <path d="M19.4875 15.5V20.5875C19.4875 21.0375 19.4375 21.4625 19.325 21.85C18.8625 23.6875 17.3375 24.8375 15.2375 24.8375H11.8375L8.0625 27.35C7.5 27.7375 6.74999 27.325 6.74999 26.65V24.8375C5.47499 24.8375 4.4125 24.4125 3.675 23.675C2.925 22.925 2.5 21.8625 2.5 20.5875V15.5C2.5 13.125 3.975 11.4875 6.25 11.275C6.4125 11.2625 6.57499 11.25 6.74999 11.25H15.2375C17.7875 11.25 19.4875 12.95 19.4875 15.5Z"/>
                                    </svg>
                                </div>
                                <div className="main-menu__link">
                                    <span>Чат</span>
                                </div>
                                <div className="main-menu-more__active-mess">2</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="main-menu-more__item">
                        <div className="main-menu-more__row main-menu-more__row--popup">
                            <div className="main-menu-more__link-wrap">
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
                            <div className="main-menu-more__popup">
                                <div className="main-menu-more__popup-content">
                                    <div className="popup-help">
                                        <div className="popup-help__item">
                                            <div className="popup-help__label">Куратор</div>
                                            <div className="popup-help__title">Александра Тареченкова</div>
                                            <div className="popup-help__text">al.tarechen@ipoteka.center</div>
                                            <div className="popup-help__text">+7 900 999-44-44</div>
                                            <div className="popup-help__link">
                                                <div className="popup-help__icon">
                                                    <svg className="icon-ws" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="s1" d="M20.2361 32.365C27.8377 32.365 34 26.2391 34 18.6825C34 11.1259 27.8377 5 20.2361 5C12.6346 5 6.47227 11.1259 6.47227 18.6825C6.47227 21.2382 7.1771 23.6302 8.40408 25.6769L6 33L13.4828 30.6076C15.4779 31.7265 17.782 32.365 20.2361 32.365Z"/>
                                                        <path className="s2" d="M18.1305 16.2696C18.1305 15.9721 17.9338 15.4763 17.8354 15.1788C17.737 14.8812 17.2452 13.3937 17.0485 13.1954C16.8226 12.8539 15.8028 13.0381 15.4422 13.1635C14.6712 13.4315 14.3781 13.8728 14.1617 14.4683C13.7128 15.7036 14.2896 18.0972 14.786 18.848C15.3667 19.7261 15.8759 20.5429 16.5566 21.3272C17.0485 21.823 17.4419 22.3188 17.9338 22.7155C19.2815 23.7345 20.7353 25.079 22.6555 24.9964C23.8956 24.943 25.1498 24.7272 25.6065 23.8064C25.8033 23.5088 26 22.8147 26 22.418C26 21.8756 24.991 21.4221 24.5779 21.1974C23.8709 20.8128 22.9591 20.4525 22.6555 20.8313C22.2799 21.3 22.2274 22.1023 21.5734 22.1205C21.0686 22.1346 20.5421 21.7494 20.0979 21.5255C19.1142 20.8313 18.1305 19.9388 17.4419 18.9471L16.9501 18.1538C16.9501 17.3279 17.945 17.0178 18.1305 16.2696Z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <a href="">Написать в WhatsApp</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popup-help__item">
                                            <div className="popup-help__label">Телеграм-чат</div>
                                            <div className="popup-help__text2">Чтобы получить оперативный экспертный разбор ваших кейсов,
                                                <a href="">пишите в чат</a>.</div>
                                        </div>
                                        <div className="popup-help__item">
                                            <div className="popup-help__label">Служба поддержки</div>
                                            <div className="popup-help__text2">Если у вас есть предложения или трудности в работе с системой,
                                                <a href="">расскажите нам</a>.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu-more__row main-menu-more__row--popup">
                            <div className="main-menu-more__link-wrap">
                                <div className="main-menu-more__icon">
                                    <svg className="icon-profile" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1484 15.9751C15.0609 15.9626 14.9484 15.9626 14.8484 15.9751C12.6484 15.9001 10.8984 14.1001 10.8984 11.8876C10.8984 9.6251 12.7234 7.7876 14.9984 7.7876C17.2609 7.7876 19.0984 9.6251 19.0984 11.8876C19.0859 14.1001 17.3484 15.9001 15.1484 15.9751Z"/>
                                        <path d="M23.4242 24.2252C21.1992 26.2627 18.2492 27.5002 14.9992 27.5002C11.7492 27.5002 8.79922 26.2627 6.57422 24.2252C6.69922 23.0502 7.44922 21.9002 8.78672 21.0002C12.2117 18.7252 17.8117 18.7252 21.2117 21.0002C22.5492 21.9002 23.2992 23.0502 23.4242 24.2252Z"/>
                                        <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"/>
                                    </svg>
                                </div>
                                <div className="main-menu-more__text">
                                    <span>Профиль</span>
                                </div>
                            </div>
                            <div className="main-menu-more__popup">
                                <div className="main-menu-more__popup-content">
                                    <div className="popup-profile">
                                        <div className="popup-profile__title">
                                            <div className="popup-profile__user-name">{user.name} {user.surname}</div>
                                            <div className="popup-profile__email">{user.mail}</div>
                                        </div>
                                        <div className="popup-profile__item">
                                            <div className="popup-profile__row">
                                                <div className="popup-profile__icon">
                                                    <svg className="icon-empty-wallet" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"/>
                                                        <path d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983"/>
                                                        <path d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"/>
                                                        <path d="M7 12H14"/>
                                                    </svg>
                                                </div>
                                                <Link to={RouteNames.BALANCE} className="popup-profile__text">Мой баланс <span className="balance-text">0<span>₽</span></span></Link>
                                            </div>
                                        </div>
                                        <div className="popup-profile__item">
                                            <div className="popup-profile__row">
                                                <div className="popup-profile__icon">
                                                    <svg className="icon-profile" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.1484 15.9751C15.0609 15.9626 14.9484 15.9626 14.8484 15.9751C12.6484 15.9001 10.8984 14.1001 10.8984 11.8876C10.8984 9.6251 12.7234 7.7876 14.9984 7.7876C17.2609 7.7876 19.0984 9.6251 19.0984 11.8876C19.0859 14.1001 17.3484 15.9001 15.1484 15.9751Z"/>
                                                        <path d="M23.4242 24.2252C21.1992 26.2627 18.2492 27.5002 14.9992 27.5002C11.7492 27.5002 8.79922 26.2627 6.57422 24.2252C6.69922 23.0502 7.44922 21.9002 8.78672 21.0002C12.2117 18.7252 17.8117 18.7252 21.2117 21.0002C22.5492 21.9002 23.2992 23.0502 23.4242 24.2252Z"/>
                                                        <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"/>
                                                    </svg>
                                                </div>
                                                <Link to={RouteNames.REQUISITES} className="popup-profile__text">
                                                    Перейти в профиль
                                                </Link>
                                            </div>
                                            <div className="popup-profile__row">
                                                <div className="popup-profile__icon">
                                                    <svg className="icon-settings" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"/>
                                                        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"/>
                                                    </svg>
                                                </div>
                                                <Link to={RouteNames.PROFILE_SETTING} className="popup-profile__text">Настройки</Link>
                                            </div>
                                        </div>
                                        <div className="popup-profile__item">
                                            <div className="popup-profile__row">
                                                <div className="popup-profile__icon">
                                                    <svg className="icon-logout" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.89844 7.56023C9.20844 3.96023 11.0584 2.49023 15.1084 2.49023H15.2384C19.7084 2.49023 21.4984 4.28023 21.4984 8.75023V15.2702C21.4984 19.7402 19.7084 21.5302 15.2384 21.5302H15.1084C11.0884 21.5302 9.23844 20.0802 8.90844 16.5402"/>
                                                        <path d="M15.0011 12H3.62109"/>
                                                        <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"/>
                                                    </svg>
                                                </div>
                                                <div className="popup-profile__text" onClick={logout}>Выход</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu-more__item">
                        <div className="main-menu-more__row">
                            <div className="main-menu-more__text">
                                <span>Бонус</span>
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