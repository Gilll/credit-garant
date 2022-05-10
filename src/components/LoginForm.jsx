import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {rules} from "../utils/rules";
import {RouteNames} from "../router";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/redusers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        login: '',
        password: ''
    })

    const {error, isLoading} = useTypedSelector(state => state.auth)

    const submit = () => {
        dispatch(AuthActionCreators.login(loginForm.login, loginForm.password));
    }
    const checkErr = () => {
        if (error) { dispatch(AuthActionCreators.setError('')); }
    }

    return (
        <div className="login-form">
            <div className="menu-logo"><Link to={RouteNames.HOME}>Кредит</Link><Link to={RouteNames.HOME}>Гарант</Link></div>
            <div className="form-field">
                <Form onFinish={submit} onValuesChange={checkErr} layout="vertical">
                    <Form.Item className="top-label" label="Почта" name="username"
                               validateStatus={error ? 'error' : 'validating'} extra={error}
                               rules={[rules.required('Введите почту'), rules.email('Неверный e-mail адресс')]}>
                        <Input value={loginForm.login}
                                onChange={(e) => setLoginForm({ ...loginForm, login: e.target.value})}
                        />
                    </Form.Item>
                    <Form.Item className="top-label" label="Пароль" name="password"
                               rules={[rules.required('Введите пароль')]}>
                        <Input.Password value={loginForm.password}
                                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value})}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={isLoading}>Войти</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="login-links">
                <Link to={RouteNames.REGISTRATION}>Регистрация</Link>
                <Link to={RouteNames.FORGOT_PASS}>Забыли пароль?</Link>
            </div>
        </div>
    );
};

export default LoginForm;