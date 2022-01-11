import React, {useEffect, useState} from 'react';
import {Checkbox, InputNumber, Radio, Select} from "antd";

const Calc = () => {
    const { Option } = Select;
    const [declYear, setDecl] = useState('год');
    const [price, setPrice] = useState('');
    const [initialFee, setInitialFee] = useState('');
    const [sumPart, setSumPart] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [checkedList, setCheckedList] = useState([]);

    function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    }

    function onChangeYears(value) {
        setDecl(declOfNum(value, ['год', 'года', 'лет']));
    }

    function onChangeInitialFee(value) {
        setInitialFee(value);
    }

    function onPriceChange(value) {
        setPrice(value);
    }

    useEffect(() => {
        if (price && initialFee) {
            setSumPart((initialFee/price*100).toFixed (2) + '%');
        } else {
            setSumPart('');
        }
    }, [price, initialFee])

    function onChangeCreditProps(e) {
        if (e.target.checked) {
            setCheckedList([e.target.value]);
        } else {
            setCheckedList([]);
        }
    }

    return (
        <div className="calc-wrap">
            <div className="calc-header">
                <div className="calc-header__col">
                    <div className="left-red-Line">Первичная проверка данных</div>
                    <div className="partner-short">
                        <div className="partner-short__icon">
                            <img src="/img/alpha.png" alt=""/>
                        </div>
                        <div className="partner-short__text">
                            <div className="partner-short__name">Альфа Банк - Партнер</div>
                            <div className="partner-short__desc">здесь вы увидите подходят ли заполненные параментры для получения ипотеки</div>
                        </div>
                    </div>
                </div>
                <div className="calc-header__col">
                    <div className="calc-header__title3">
                        Чтобы создать заявку на кредит сначала необходимо заполнить этот раздел.
                    </div>
                    { (propertyType && initialFee && price)
                        ?
                        <div className="calc-header__text">
                            Чтобы увидеть первые предложения от банков, нажмите на кнопку внизу страницы.
                        </div>
                        :
                        <div className="calc-header__text">
                            Чтобы вы смогли увидеть первые предложения от банков, вам необходимо указать:
                            { !propertyType && <span> информацию о недвижимости,</span> }
                            { !initialFee && <span> первоначальный взнос, </span> }
                            { !price && <span> стоимость жилья.</span> }
                        </div>
                    }
                </div>
            </div>
            <div className="calc-body">
                <div className="form-field">
                    <div className="form-field__row form-field__row--flex label-on-top">
                        <div className="form-field__col4">
                            <label>Цель кредита</label>
                            <Select defaultValue="mortgage" dropdownClassName="with-radio">
                                <Option value="refinancing">
                                    <span className="checkmark"></span>
                                    <span>Рефинансирование</span>
                                </Option>
                                <Option value="mortgage">
                                    <span className="checkmark"></span>
                                    <span>Ипотека</span>
                                </Option>
                            </Select>
                        </div>
                        <div className="form-field__col4">
                            <label>Продавец недвижимости</label>
                            <Select dropdownClassName="with-radio" listHeight={290}>
                                <Option value="developer">
                                    <div className="with-desc">
                                        <div className="row">
                                            <span className="checkmark"></span>
                                            <span>Застройщик</span>
                                        </div>
                                        <div className="desc">Строящееся жилье</div>
                                    </div>
                                </Option>
                                <Option value="individual">
                                    <div className="with-desc">
                                        <div className="row">
                                            <span className="checkmark"></span>
                                            <span>Физлицо</span>
                                        </div>
                                        <div className="desc">Строящееся жилье</div>
                                    </div>
                                </Option>
                                <Option value="entity">
                                    <div className="with-desc">
                                        <div className="row">
                                            <span className="checkmark"></span>
                                            <span>Юрлицо</span>
                                        </div>
                                        <div className="desc">Строящееся жилье</div>
                                    </div>
                                </Option>
                                <Option value="assignmentIndividual">
                                    <div className="with-desc">
                                        <div className="row">
                                            <span className="checkmark"></span>
                                            <span>Переуступка от юрлица</span>
                                        </div>
                                        <div className="desc">Строящееся жилье</div>
                                    </div>
                                </Option>
                                <Option value="assignmentEntity">
                                    <div className="with-desc">
                                        <div className="row">
                                            <span className="checkmark"></span>
                                            <span>Переуступка от физлица</span>
                                        </div>
                                        <div className="desc">Строящееся жилье</div>
                                    </div>
                                </Option>
                            </Select>
                        </div>
                        <div className="form-field__col4">
                            <label>Тип недвижимости</label>
                            <Select dropdownClassName="with-radio" onChange={setPropertyType}>
                                <Option value="house">
                                    <span className="checkmark"></span>
                                    <span>Дом или таунхаус</span>
                                </Option>
                                <Option value="flat">
                                    <span className="checkmark"></span>
                                    <span>Квартира</span>
                                </Option>
                                <Option value="room">
                                    <span className="checkmark"></span>
                                    <span>Комната или доля</span>
                                </Option>
                            </Select>
                        </div>
                        <div className="form-field__col4">
                            <label>Город</label>
                            <Select dropdownClassName="with-radio">
                                <Option value="moscow">
                                    <span className="checkmark"></span>
                                    <span>Moscow</span>
                                </Option>
                                <Option value="piter">
                                    <span className="checkmark"></span>
                                    <span>Piter</span>
                                </Option>
                            </Select>
                        </div>
                    </div>
                    <div className="form-field__row">
                        <div className="form-field__title">Расчет по</div>
                        <div>
                            <Radio.Group>
                                <Radio value={1}>Стоимости жилья</Radio>
                                <Radio value={2}>Ежемесячному платежу</Radio>
                                <Radio value={3}>Доходу</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="form-field__row form-field__row--flex label-on-top">
                        <div className="form-field__col4 input-year">
                            <label>Срок кредита</label>
                            <InputNumber min={1} max={30} defaultValue={1} addonAfter={declYear} onChange={onChangeYears}/>
                        </div>
                        <div className="form-field__col4">
                            <label>Стоимость жилья, ₽</label>
                            <InputNumber min={0} max={10000000} step={100000} onChange={onPriceChange}/>
                        </div>
                        <div className="form-field__col4 input-part">
                            <label>Первоначальный взнос, ₽</label>
                            <InputNumber min={0} max={10000000} step={100000} addonAfter={sumPart} onChange={onChangeInitialFee}/>
                        </div>
                    </div>
                    <div className="form-field__row">
                        <Checkbox.Group value={checkedList}>
                            <Checkbox onChange={onChangeCreditProps} value={1}>Военная ипотека</Checkbox>
                            <Checkbox onChange={onChangeCreditProps} value={2}>Семейная ипотека</Checkbox>
                            <Checkbox onChange={onChangeCreditProps} value={3}>Госпрограмма</Checkbox>
                        </Checkbox.Group>
                        <Checkbox>Материнский капитал</Checkbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calc;