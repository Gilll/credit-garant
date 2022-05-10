import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../router";
import {Button, Checkbox, Form, Input} from "antd";
import {rules} from "../utils/rules";
import NumberFormat from 'react-number-format';

const RegistrationForm = () => {
    const [firstStep, setFirstStep] = useState(false);
    const [regData, setRegData] = useState({
        email: '',
        phone: '',
        name: '',
        city: '',
        password: '',
        passwordConfirmation: '',
        personalData: false,
        mailSubscription: false
    });
    const firstStepEnd = () => {
        setFirstStep(true);
    }
    return (
        <div className="login-form">
            <div className="menu-logo"><Link to={RouteNames.HOME}>Кредит</Link><Link to={RouteNames.HOME}>Гарант</Link></div>
            {!firstStep
                ?
                    <>
                        <div className="login-form__title">Регистрация</div>
                        <div className="form-field">
                            <Form onFinish={firstStepEnd} layout="vertical">
                                <Form.Item className="top-label" label="Почта" name="email"
                                           rules={[rules.required('Необходимо заполнить поле'), rules.email('Неверный e-mail адресс')]}>
                                    <Input value={regData.email}
                                        onChange={(e) => setRegData({...regData, email: e.target.value})}/>
                                </Form.Item>
                                <Form.Item className="top-label" label="Телефон" name="phone"
                                           rules={[rules.required('Необходимо заполнить поле'), rules.phone('Неверный номер телефона')]}>
                                    <NumberFormat
                                        customInput={Input}
                                        allowEmptyFormatting
                                        format="+7 (###) ###-##-##" mask="_"
                                        value={regData.phone}
                                        onChange={(e) => setRegData({...regData, phone: e.target.value})}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Checkbox
                                        checked={regData.personalData}
                                        onChange={(e) => setRegData({...regData, personalData: e.target.checked})}
                                    >Даю согласие на обработку персональных данных</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Checkbox
                                        checked={regData.mailSubscription}
                                        onChange={(e) => setRegData({...regData, mailSubscription: e.target.checked})}
                                    >Даю согласие на получение писем от платформы</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Далее</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </>
                :
                    <>
                        <div className="login-form__title">Расскажите о себе</div>
                        <div className="form-field">
                            <Form onFinish={firstStepEnd} layout="vertical">
                                <Form.Item className="top-label" label="ФИО" name="full_name"
                                           rules={[rules.required('Необходимо заполнить поле')]}>
                                    <Input value={regData.name}
                                           onChange={(e) => setRegData({...regData, name: e.target.value})}/>
                                </Form.Item>
                                <Form.Item className="top-label" label="ФИО" name="full_name"
                                           rules={[rules.required('Необходимо заполнить поле')]}>
                                    <Input value={regData.name}
                                           onChange={(e) => setRegData({...regData, name: e.target.value})}/>
                                </Form.Item>
                                <Form.Item className="top-label" label="ФИО" name="full_name"
                                           rules={[rules.required('Необходимо заполнить поле')]}>
                                    <Input value={regData.name}
                                           onChange={(e) => setRegData({...regData, name: e.target.value})}/>
                                </Form.Item>
                                <Form.Item className="top-label" label="Город" name="city"
                                           rules={[rules.required('Необходимо заполнить поле')]}>
                                    <Input value={regData.city}
                                           onChange={(e) => setRegData({...regData, city: e.target.value})}/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Далее</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </>
            }
        </div>
    );
};

export default RegistrationForm;