import React, {useState} from 'react';
import {Checkbox, Collapse, InputNumber, Progress, Select, Tooltip} from "antd";
import {declOfNum} from "../../utils/declension";
import InputYear from "./InputYear";
import {InfoCircleFilled} from "@ant-design/icons";

const CreditForm = () => {
    const { Option } = Select;
    const { Panel } = Collapse;
    const [cfWrap, setCfWrap] = useState(true);
    const [checkedList, setCheckedList] = useState([]);
    const [creditForm, setCreditForm] = useState({
        term: '',
        sum: '',
        initialFee: '',
        bonuses: '',
        maternalCapital: false,
        maternalCapitalValue: '',
        seller: '',
        city: '',
        propertyType: ''
    });

    const getCreditFormProgress = () => {
        let active = 0;
        if (creditForm.term) { active++; }
        if (creditForm.sum) { active++; }
        if (creditForm.initialFee) { active++; }
        if (creditForm.city) { active++; }
        if (creditForm.propertyType) { active++; }
        if (creditForm.seller) { active++; }
        return Math.ceil(active/6*100);
    }

    function onChangeCreditProps(e) {
        if (e.target.checked) {
            setCheckedList([e.target.value]);
        } else {
            setCheckedList([]);
        }
    }

    return (
        <div className="collapse-form">
            <div className="collapse-form__title">
                <div className="collapse-form__title-left">
                    <div className="collapse-form__title-name">Параметры кредита</div>
                </div>
                <div className="collapse-form__title-right">
                    <Progress percent={getCreditFormProgress()} status="active" />
                </div>
            </div>
            <div className="collapse-form__short-info">
                <div className="collapse-form__short-info-item">
                    <div className="collapse-form__short-info-title">Цель кредита</div>
                    <div className="collapse-form__short-info-text">Ипотека</div>
                </div>
                {creditForm.term &&
                <div className="collapse-form__short-info-item">
                    <div className="collapse-form__short-info-title">Срок</div>
                    <div className="collapse-form__short-info-text">{creditForm.term} {declOfNum(creditForm.term, ['год', 'года', 'лет'])}</div>
                </div>
                }
                {creditForm.sum &&
                <div className="collapse-form__short-info-item">
                    <div className="collapse-form__short-info-title">Сумма кредита</div>
                    <div className="collapse-form__short-info-text">{creditForm.sum}₽</div>
                </div>
                }
                {creditForm.initialFee &&
                <div className="collapse-form__short-info-item">
                    <div className="collapse-form__short-info-title">Первоначальный взнос</div>
                    <div className="collapse-form__short-info-text">{creditForm.initialFee}₽</div>
                </div>
                }
            </div>
            <Collapse bordered={false} activeKey={cfWrap ? ['1'] : []}>
                <Panel key="1">
                    <div className="collapse-form__content">
                        <div className="form-field">
                            <div className="left-red-Line">Данные о кредите</div>
                            <div className="form-field__row form-field__row--flex label-on-top">
                                <div className="form-field__col3m input-year">
                                    <label>Срок кредита</label>
                                    <InputYear value={creditForm.term}
                                               onChange={(value) => setCreditForm({...creditForm, term: value})}/>
                                </div>
                                <div className="form-field__col3m">
                                    <label>Стоимость жилья, ₽</label>
                                    <InputNumber min={0} max={10000000} step={100000} value={creditForm.sum}
                                                 onChange={(value) => setCreditForm({...creditForm, sum: value})}/>
                                </div>
                                <div className="form-field__col3m input-part">
                                    <label>Первоначальный взнос, ₽</label>
                                    <InputNumber
                                        min={0}
                                        max={10000000}
                                        step={100000}
                                        addonAfter={(creditForm.initialFee && creditForm.sum) ?
                                            (creditForm.initialFee/creditForm.sum*100).toFixed (2) + '%' : ''}
                                        onChange={(value) => setCreditForm({...creditForm, initialFee: value})}
                                    />
                                </div>
                            </div>
                            <div className="form-field__row less">
                                <Checkbox.Group value={checkedList}>
                                    <Checkbox onChange={onChangeCreditProps} value={1}>Военная ипотека</Checkbox>
                                    <Checkbox onChange={onChangeCreditProps} value={2}>
                                        Семейная ипотека
                                        <Tooltip placement="rightTop" title="Ипотека для семей, в которых с 01.01.2018 по 31.12.2022 родился ребенок">
                                            <InfoCircleFilled style={{ marginLeft: '1rem', color: '#8D8D9B' }}/>
                                        </Tooltip>
                                    </Checkbox>
                                    <Checkbox onChange={onChangeCreditProps} value={3}>Госпрограмма</Checkbox>
                                </Checkbox.Group>
                            </div>
                            <div className="form-field__row">
                                <Checkbox
                                    checked={creditForm.maternalCapital}
                                    onChange={(e) => setCreditForm({...creditForm, maternalCapital: e.target.checked})}
                                >Материнский капитал</Checkbox>
                            </div>
                            {creditForm.maternalCapital &&
                            <div className="form-field__row label-on-top">
                                <div className="form-field__col3m">
                                    <label>Материнский капитал, ₽</label>
                                    <InputNumber min={0} max={1000000} step={100000} value={creditForm.maternalCapitalValue}
                                                 onChange={(value) => setCreditForm({...creditForm, maternalCapitalValue: value})}/>
                                </div>
                            </div>
                            }
                            <div className="form-field__gray-line"></div>
                            <div className="left-red-Line">Недвижимость</div>
                            <div className="form-field__row form-field__row--flex label-on-top">
                                <div className="form-field__col3m">
                                    <label>Продавец недвижимости</label>
                                    <Select
                                        dropdownClassName="with-radio"
                                        listHeight={290}
                                        value={creditForm.seller}
                                        onChange={(value) => setCreditForm({...creditForm, seller: value})}
                                    >
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
                                <div className="form-field__col3m">
                                    <label>Город</label>
                                    <Select
                                        dropdownClassName="with-radio"
                                        value={creditForm.city}
                                        onChange={(value) => setCreditForm({...creditForm, city: value})}
                                    >
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
                                <div className="form-field__col3m">
                                    <label>Тип недвижимости</label>
                                    <Select
                                        dropdownClassName="with-radio"
                                        value={creditForm.propertyType}
                                        onChange={(value) => setCreditForm({...creditForm, propertyType: value})}
                                    >
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
                            </div>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <div className={cfWrap ? "collapse-form__btn active" : "collapse-form__btn"}>
                <div className="collapse-form__btn-box" onClick={() => setCfWrap(!cfWrap)}>
                    <div className="collapse-form__btn-text">
                        <span className="active">Свернуть</span>
                        <span className="inactive">Развернуть</span>
                        <span> параметры</span>
                    </div>
                    <div className="collapse-form__btn-icon">
                        <svg className="icon-arr-down" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30078 1.5L4.83108 4.2559C4.53942 4.58137 4.06215 4.58137 3.77048 4.2559L1.30078 1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditForm;