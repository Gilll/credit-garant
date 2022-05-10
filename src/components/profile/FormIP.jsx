import React from 'react';
import {Input} from "antd";

const FormIp = () => {
    return (
        <>
            <div className="requisites-from form-field">
                <div className="requisites-from__title">Индивидуальный предприниматель</div>
                <div className="requisites-from__line"></div>
                <div className="left-red-Line less2">Общие данные</div>
                <div className="form-field__row form-field__row--flex label-on-top">
                    <div className="form-field__col2 col2-padding">
                        <label>Наименование</label>
                        <Input/>
                    </div>
                    <div className="form-field__col2 col2-padding">
                        <label>Генеральный директор</label>
                        <Input/>
                    </div>
                </div>
                <div className="form-field__row form-field__row--flex label-on-top">
                    <div className="form-field__col3">
                        <label>Юредический адрес</label>
                        <Input/>
                    </div>
                    <div className="form-field__col3">
                        <label>ИНН</label>
                        <Input/>
                    </div>
                    <div className="form-field__col3">
                        <label>Система налогообложения</label>
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

export default FormIp;