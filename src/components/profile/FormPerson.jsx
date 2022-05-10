import React from 'react';
import {Input} from "antd";

const FormPerson = () => {
    return (
        <>
            <div className="requisites-from form-field">
                <div className="requisites-from__title">Физлицо</div>
                <div className="requisites-from__line"></div>
                <div className="left-red-Line less2">Общие данные</div>
                <div className="form-field__row label-on-top">
                    <div className="form-field__col">
                        <label>ФИО</label>
                        <Input/>
                    </div>
                </div>
                <div className="requisites-from__line"></div>
                <div className="left-red-Line less2">Банковские реквизиты</div>
                <div className="form-field__row form-field__row--flex label-on-top">
                    <div className="form-field__col3">
                        <label>Обслуживающий банк</label>
                        <Input/>
                    </div>
                    <div className="form-field__col3">
                        <label>БИК</label>
                        <Input/>
                    </div>
                    <div className="form-field__col3">
                        <label>Расчетный счет</label>
                        <Input/>
                    </div>
                </div>
            </div>
            <div className="requisites__next with-border">
                <div className="btn btn-red" >Сохранить</div>
            </div>
        </>
    );
};

export default FormPerson;