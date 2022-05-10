import React, {useEffect, useState} from 'react';
import {Checkbox, Collapse, Input, InputNumber, Radio, Select, Tooltip} from "antd";
import { InfoCircleFilled } from "@ant-design/icons"
import alpha from "../img/icons/alpha.png"
import ClearAllBtn from "../components/ClearAllBtn";
import PlusCircleTwoTone from "@ant-design/icons/lib/icons/PlusCircleTwoTone";
import InputYear from "../components/requests/InputYear";
import CityInput from "../components/UI/CityInput";
import ArrLeft from "../components/icons/ArrLeft";
import IconTilda from "../components/icons/IconTilda";
import IconRate from "../components/icons/IconRate";
import IconCheckmark from "../components/icons/IconCheckmark";
import IconSortUp from "../components/icons/IconSortUp";
import IconSortDown from "../components/icons/IconSortDown";
import IconClose from "../components/icons/IconClose";

const Calc = () => {
    const { Option } = Select;
    const { Panel } = Collapse;
    const [price, setPrice] = useState('');
    const [initialFee, setInitialFee] = useState('');
    const [sumPart, setSumPart] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [developerType, setDeveloperType] = useState('');
    const [checkedList, setCheckedList] = useState([]);
    const [jobList, setJobList] = useState([]);
    const [calculationType, setCalculationType] = useState(1);
    const [age, setAge] = useState('');
    const [creditTerm, setCreditTerm] = useState('');
    const [employment, setEmployment] = useState('');
    const [stepComplete, setStepComplete] = useState(false);
    const [noErrorsCredit, setNoErrorsCredit] = useState(false);
    const [showNextStep, setShowNextStep] = useState(false);
    const [choisenCredit, setChoisetCredit] = useState(-1);
    const defaultCreditRules = {
        age: { min: 21, max: 70, advanced: { max: 65, current:50 }, docs: { less: 27, doc: 'Военный билет' } },
        seniority: { total: 12, current: 4, ip: 18 },
        price: { min: 600000, max: 50000000 },
        term: { min: 3, max: 30 }
    }
    const credits = [
        {
            type: 'built',
            name: 'Готовое жилье',
            propertyStatus: 'built',
            initialFee: { default: 20, advanced: [{ propertyType: 'house', value: 50 }] },
            gosSupport: 0,
            propertyTypes: ['house', 'flat', 'room'],
            errors: [],
            term: { min: 3, max: 30 },
            amount: { min: 600000, max: 25000000 },
            rate: {
                current: 9.44,
                base: 9.44,
                incriment: {
                    ip: 0.5
                },
                dependencies: {
                        initialFee: {
                            more: 50,
                            moreValue: 8.94
                        },
                    },
                },
        },
        {
            type: 'underConstruction',
            name: 'Строящееся жилье',
            propertyStatus: 'underConstruction',
            initialFee: { default: 30, advanced: [{ propertyType: 'house', value: 50 }] },
            gosSupport: 0,
            propertyTypes: ['house', 'flat'],
            errors: [],
            term: { min: 3, max: 30 },
            amount: { min: 600000, max: 25000000 },
            rate: {
                current: 8.59,
                base: 8.59,
                incriment: {
                    ip: 0.5
                },
                dependencies: {
                    initialFee: {
                        more: 20,
                        moreValue: 8.39
                    },
                },
            },
        },
        {
            type: 'byPassport',
            name: 'Ипотека по паспорту',
            propertyStatus: 'any',
            initialFee: { default: 40, advanced: [{ propertyType: 'house', value: 50 }] },
            gosSupport: 0,
            propertyTypes: ['flat', 'room'],
            errors: [],
            term: { min: 3, max: 20 },
            amount: { min: 600000, max: 15000000 },
            rate: {
                current: 8.59,
                base: 8.59,
                incriment: {
                    ip: 0.5
                },
                dependencies: {
                    initialFee: {
                        more: 20,
                        moreValue: 8.39
                    },
                    propertyType: {
                        built: 9.94,
                        underConstruction: 8.59
                    }
                },
            },
        },
        {
            type: 'gossSupport',
            name: 'Строящееся жилье с господдержкой',
            propertyStatus: 'underConstruction',
            initialFee: { default: 15 },
            gosSupport: 3,
            propertyTypes: ['house', 'flat'],
            errors: [],
            term: { min: 3, max: 30 },
            amount: { min: 600000, max: 3000000 },
            rate: {
                current: 5.99,
                base: 5.99,
                incriment: {
                    ip: 0
                },
                dependencies: false,
            },
        },
        {
            type: 'familyCapital',
            name: 'Семейная Ипотека',
            propertyStatus: 'any',
            initialFee: { default: 15 },
            gosSupport: 2,
            propertyTypes: ['house', 'flat'],
            errors: [],
            term: { min: 3, max: 30 },
            amount: { min: 600000, max: 12000000 },
            rate: {
                current: 4.79,
                base: 4.79,
                incriment: {
                    ip: 0
                },
                dependencies: false,
            },
        }
    ]

    const [filterCredits, setFilterCredits] = useState(credits);
    const [renderList, setRenderList] = useState(credits);

    function onChangeInitialFee(value) {
        setInitialFee(value);
    }

    const propertyTypeByEntity = (ent) => {
        switch (ent) {
            case 'developer':
                return 'underConstruction';
            case 'individual':
                return 'built';
            case 'entity':
                return 'built';
            case 'assignmentIndividual':
                return 'underConstruction';
            case 'assignmentEntity':
                return 'underConstruction';
            default: return 'underConstruction';
        }
    }

    useEffect(() => {
        let pt = propertyTypeByEntity(developerType);
        setRenderList(filterCredits.filter(credit => (credit.propertyStatus.includes(pt) || credit.propertyStatus === 'any'))
            .filter(credit => (credit.gosSupport === 0 || (checkedList.length ? credit.gosSupport === checkedList[0] : false)))
        );
    },[developerType, checkedList, filterCredits]);

    useEffect(() => {
        if (developerType !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (credit.rate.dependencies.propertyType) {
                    credit.rate.current = credit.rate.dependencies.propertyType[propertyTypeByEntity(developerType)]
                }
            })
            setFilterCredits(checkErr);
        }
    },[developerType])

    useEffect(() => {
        if (propertyType !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (!credit.propertyTypes.includes(propertyType)) {
                    if (credit.errors.filter(item => item.type === 'propertyType').length === 0) {
                        credit.errors.push({
                            type: 'propertyType',
                            text: 'Банк не кредитует тип недвижимости «' + propertyType + '».'
                        })
                    }
                } else {
                    credit.errors = credit.errors.filter(item => item.type !== 'propertyType');
                }
            })
            setFilterCredits(checkErr);
        }
    },[propertyType]);

    useEffect(() => {
        if (age !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (age < defaultCreditRules.age.min) {
                    if (credit.errors.filter(item => item.type === 'ageMinErr').length === 0) {
                        credit.errors.push({
                            type: 'ageMinErr',
                            text: 'Банк не кредитует младше ' + defaultCreditRules.age.min + ' года.'
                        })
                    }
                } else {
                    credit.errors = (credit.errors.length > 0 && credit.errors.filter(item => item.type !== 'ageMinErr')) || [];
                }
                if ((parseInt(age) + creditTerm) > 70) {
                    if (credit.errors.filter(item => item.type === 'ageMaxErr').length === 0) {
                        credit.errors.push({
                            type: 'ageMaxErr',
                            text: 'На дату погашения кредита возраст не должен быть более 70 лет.'
                        })
                    }
                } else {
                    credit.errors = (credit.errors.length > 0 && credit.errors.filter(item => item.type !== 'ageMaxErr')) || [];
                }
            })
            setFilterCredits(checkErr);
        }
    },[age])

    useEffect(() => {
        if (creditTerm !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (creditTerm < credit.term.min || creditTerm > credit.term.max) {
                    if (credit.errors.filter(item => item.type === 'termErr').length === 0) {
                        if (creditTerm < credit.term.min) {
                            credit.errors.push({
                                type: 'termErr',
                                text: 'Минимальный срок кредита ' + credit.term.min + ' года.'
                            })
                        } else {
                            credit.errors.push({
                                type: 'termErr',
                                text: 'Максимальный срок кредита ' + credit.term.max + ' лет.'
                            })
                        }
                    }
                } else {
                    credit.errors = (credit.errors.length > 0 && credit.errors.filter(item => item.type !== 'termErr')) || [];
                }
            })
            setFilterCredits(checkErr);
        }
    },[creditTerm])

    useEffect(() => {
        if (price !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (price < credit.amount.min || price > credit.amount.max) {
                    if (credit.errors.filter(item => item.type === 'amountErr').length === 0) {
                        if (price < credit.amount.min) {
                            credit.errors.push({
                                type: 'amountErr',
                                text: 'Минимальная сумма кредита ' + credit.amount.min + ' руб.'
                            })
                        } else {
                            credit.errors.push({
                                type: 'amountErr',
                                text: 'Максимальная сумма кредита ' + credit.amount.max + ' руб.'
                            })
                        }
                    }
                } else {
                    credit.errors = (credit.errors.length > 0 && credit.errors.filter(item => item.type !== 'amountErr')) || [];
                }
            })
            setFilterCredits(checkErr);
        }
    },[price])

    useEffect(() => {
        if (developerType && propertyType && price && creditTerm && initialFee && age && employment) {
            setStepComplete(true);
        } else {
            setStepComplete(false)
        }
    },[developerType,propertyType,price,creditTerm,initialFee,age,employment])

    useEffect(() => {
        if (stepComplete) setNoErrorsCredit(hasNoErrorsField());
    },[renderList, stepComplete])

    const validateInitialFee = () => {
        if (sumPart !== '') {
            let checkErr = filterCredits.slice();
            checkErr.map((credit, index) => {
                if (parseInt(sumPart) < credit.initialFee.default) {
                    if (credit.errors.filter(item => item.type === 'feeErr').length === 0) {
                        credit.errors.push({
                            type: 'feeErr',
                            text: 'Минимальный первоначальный взнос ' + credit.initialFee.default + '%.'
                        })
                    }
                } else {
                    credit.errors = (credit.errors.length > 0 && credit.errors.filter(item => item.type !== 'feeErr')) || [];
                }
            })
            setFilterCredits(checkErr);
        }
    }

    useEffect(() => {
        validateInitialFee();
    },[sumPart])

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
    function onChangeJobProps(e) {
        if (e.target.checked) {
            setJobList([e.target.value]);
        } else {
            setJobList([]);
        }
    }

    const clearALlBtn = () => (
        <ClearAllBtn onClick={ event => {
            console.log('tt');
            event.stopPropagation();
        }}/>
        );

    const onChangeCalcType = (e) => {
        setCalculationType(e.target.value);
        setPrice(undefined);
    }

    const hasNoErrorsField = () => {
        let ef = false;
        renderList.map(item => {
            if (item.errors.length === 0) ef = true;
        })
        return ef;
    }

    const creditFilters = [
        { query: 'mounth', text: 'По ежемесячному платежу' },
        { query: 'rate', text: 'По ставке' },
        { query: 'more', text: 'По переплате' },
        { query: 'bonus', text: 'По бонусу' },
    ]

    const [choisenSort, setChoisenSort] = useState({ ind: -1, inc: true });

    useEffect(() => {
        if (choisenSort.inc) {
            setRenderList([...renderList].sort((a,b) => { return a.rate["current"] - b.rate["current"]}))
        } else {
            setRenderList([...renderList].sort((a,b) => { return b.rate["current"] - a.rate["current"]}))
        }
    },[choisenSort])

    return (
        <div className="container">
            {showNextStep ?
                <div className="calc-last-step">
                    <div className="back-to-page" onClick={() => { setShowNextStep(false); setChoisetCredit(-1)}}>
                        <ArrLeft/>
                        <span>Вернуться к редактированию калькулятора</span>
                    </div>
                    <div className="calc-request-about">
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Работа с заявкой до</div>
                            <div className="calc-request-about__text">Сделки</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Цель кредита</div>
                            <div className="calc-request-about__text">Ипотека</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Продавец недвижимости</div>
                            <div className="calc-request-about__text">{developerType}</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Тип недвижимости</div>
                            <div className="calc-request-about__text">{propertyType}</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Срок кредита</div>
                            <div className="calc-request-about__text">{creditTerm}</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Стоимость жилья, ₽</div>
                            <div className="calc-request-about__text">{price}</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Расчет по</div>
                            <div className="calc-request-about__text">Стоимости жилья</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Первоначальный взнос, ₽</div>
                            <div className="calc-request-about__text">{initialFee}</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Город</div>
                            <div className="calc-request-about__text">Москва</div>
                        </div>
                        <div className="calc-request-about__item">
                            <div className="calc-request-about__title">Уровень зарплаты, ₽</div>
                            <div className="calc-request-about__text">120 000</div>
                        </div>
                    </div>
                    <div className="available-credits">
                        <div className="left-red-Line">Проверка документов <span className="count">2</span></div>
                        <div className="available-credits__desc">Выберите одно предложение, чтобы подать заявку</div>
                    </div>
                    <div className="available-credits-filter">
                        <div className="available-credits-filter__title">Сортировать:</div>
                        {creditFilters.map((item, index) =>
                            <div className={choisenSort.ind === index ? "available-credits-filter__item active" : "available-credits-filter__item"} key={index}>
                                <div className="available-credits-filter__actions">
                                    <div className="available-credits-filter__actions-item" onClick={() => {setChoisenSort({ ...choisenSort, inc: true }); console.log('clcik');}}>
                                        <IconSortUp className={choisenSort.inc && 'active'}/>
                                    </div>
                                    <div className="available-credits-filter__actions-item" onClick={() => setChoisenSort({ ...choisenSort, inc: false })}>
                                        <IconSortDown className={!choisenSort.inc && 'active'}/>
                                    </div>
                                </div>
                                <div className="available-credits-filter__text" onClick={() => setChoisenSort({ ind: index, inc: true })}>{item.text}</div>
                                <div className="available-credits-filter__close" onClick={() => setChoisenSort({ ind: -1, inc: true })}>
                                    <IconClose/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="available-credits-list">
                        {renderList.map((item, index) =>
                            item.errors.length === 0 &&
                            <div className="available-credits-list__item-wrap" key={index}>
                                <div className={index === choisenCredit ? "available-credits-list__item active" : "available-credits-list__item"}
                                     onClick={() => { choisenCredit === index ? setChoisetCredit(-1) : setChoisetCredit(index); }}
                                >
                                    <div className="available-credits-list__layout">
                                        <div className="available-credits-list__about-bg">
                                            <div className="available-credits-list__about">
                                                <div className="available-credits-list__icon-bank">
                                                    <img src="/img/alpha.png" alt=""/>
                                                </div>
                                                <div className="available-credits-list__about-bank">
                                                    <div className="available-credits-list__bank-name">Альфа Банк</div>
                                                    <div className="available-credits-list__credit-name">{item.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="available-credits-list__bonus-wrap">
                                            <div className="available-credits-list__bonus">
                                                <div className="available-credits-list__bonus-text">Вознаграждение агента</div>
                                                <IconTilda/>
                                                <div className="available-credits-list__bonus-sum">29 354 ₽</div>
                                                <IconRate/>
                                            </div>
                                        </div>
                                        <div className="available-credits-list__props">
                                            <div className="available-credits-list__prop">
                                                <div className="available-credits-list__prop-title">Ставка</div>
                                                <div className="available-credits-list__prop-value">{item.rate.current}</div>
                                            </div>
                                            <div className="available-credits-list__prop">
                                                <div className="available-credits-list__prop-title">Стоимость жилья</div>
                                                <div className="available-credits-list__prop-value">{price}</div>
                                            </div>
                                            <div className="available-credits-list__prop">
                                                <div className="available-credits-list__prop-title">Уровень зарплаты</div>
                                                <div className="available-credits-list__prop-value">120 000</div>
                                            </div>
                                            <div className="available-credits-list__prop">
                                                <div className="available-credits-list__prop-title">Переплата</div>
                                                <div className="available-credits-list__prop-value">20 505 427</div>
                                            </div>
                                            <div className="available-credits-list__prop">
                                                <div className="available-credits-list__prop-title">Ежемес. платеж</div>
                                                <div className="available-credits-list__prop-value">85 615</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="available-credits-list__item-cheskmark"><IconCheckmark/></div>
                                    <div className="available-credits-list__item-ready">Готово!</div>
                                </div>
                                <Collapse activeKey={index === choisenCredit ? [index] : []}>
                                    <Panel header="Созаемщики" key={index}>
                                        <div className="credit-about-info">
                                            <div className="credit-about-info__col">
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">01</div>
                                                    <div className="credit-about-info__text">
                                                        ПВ от 10% для наемных работников и бизнеса, только если у заемщика
                                                        или созаемщика есть не обремененная недвижимость в собственности.
                                                        Оформление залога не требуется. Ставка увеличится на 1%
                                                    </div>
                                                </div>
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">02</div>
                                                    <div className="credit-about-info__text">
                                                        Рассмотрение клиентов в возрасте от 20 до 85. Заемщикам старше 70 лет нужен созаемщик,
                                                        чей возраст на момент погашения кредита будет меньше 70 лет
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="credit-about-info__col">
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">03</div>
                                                    <div className="credit-about-info__text">
                                                        Лояльное рассмотрение собственников бизнеса и ИП
                                                    </div>
                                                </div>
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">04</div>
                                                    <div className="credit-about-info__text">
                                                        Лояльное отношение к перепланировкам
                                                    </div>
                                                </div>
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">05</div>
                                                    <div className="credit-about-info__text">
                                                        Можно включить страхование в сумму кредита
                                                    </div>
                                                </div>
                                                <div className="credit-about-info__item">
                                                    <div className="credit-about-info__num">06</div>
                                                    <div className="credit-about-info__text">
                                                        Есть дополнительные платные опции по снижению процентной ставки
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        )}
                    </div>
                    <div className="calc-next">
                        {choisenCredit < 0 ?
                            <>
                                <div className="calc-next__text">Вы не можете создать заявку, пока не выберите предложение</div>
                                <div className="btn btn-red btn-red--disabled">Создать заявку</div>
                            </>
                            :
                            <div className="btn btn-red" >Создать заявку</div>
                        }
                    </div>
                </div>
                :
                <div className="calc-wrap">
                    <div className="calc-header">
                        <div className="calc-header__col">
                            <div className="left-red-Line">Первичная проверка данных</div>
                            <div className="partner-short">
                                <div className="partner-short__icon">
                                    <img src={alpha} alt=""/>
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
                                    <Select dropdownClassName="with-radio" value={developerType} onChange={setDeveloperType} listHeight={290}>
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
                                                <div className="desc">Готовое жилье</div>
                                            </div>
                                        </Option>
                                        <Option value="entity">
                                            <div className="with-desc">
                                                <div className="row">
                                                    <span className="checkmark"></span>
                                                    <span>Юрлицо</span>
                                                </div>
                                                <div className="desc">Готовое жилье</div>
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
                                    <Select dropdownClassName="with-radio" value={propertyType} onChange={setPropertyType}>
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
                                    <CityInput/>
                                </div>
                            </div>
                            <div className="form-field__row">
                                <div className="form-field__title">Расчет по</div>
                                <div>
                                    <Radio.Group value={calculationType} onChange={onChangeCalcType}>
                                        <Radio value={1}>Стоимости жилья</Radio>
                                        <Radio value={2}>Ежемесячному платежу</Radio>
                                        <Radio value={3}>Доходу</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="form-field__row form-field__row--flex label-on-top">
                                <div className="form-field__col4 input-year">
                                    <label>Срок кредита</label>
                                    <InputYear value={creditTerm} onChange={(value) => setCreditTerm(value)}/>
                                </div>
                                <div className="form-field__col4">
                                    {{
                                        1: <><label>Стоимость жилья, ₽</label><InputNumber value={price} min={0} max={10000000} step={100000} onChange={onPriceChange}/></>,
                                        2: <><label>Макс ежемесячный платеж, ₽</label><InputNumber min={0} max={10000000} step={10000}/></>,
                                        3: <><label>Доход, ₽</label><InputNumber min={0} max={10000000} step={10000}/></>
                                    }[calculationType]}
                                </div>
                                <div className="form-field__col4 input-part">
                                    <label>Первоначальный взнос, ₽</label>
                                    <InputNumber min={0} max={10000000} step={100000} value={initialFee} addonAfter={sumPart} onChange={onChangeInitialFee}/>
                                </div>
                            </div>
                            <div className="form-field__row">
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
                                <Checkbox>Материнский капитал</Checkbox>
                            </div>
                            <div className="form-field__row form-field__row--flex">
                                <div className="form-field__col3">
                                    <Collapse expandIconPosition={"right"}>
                                        <Panel header="Заемщик" key="1" extra={clearALlBtn()}>
                                            <div className="form-field__row label-on-top">
                                                <div className="form-field__col">
                                                    <label>Возраст, лет</label>
                                                    <Input value={age} onChange={(e) => setAge(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-field__row label-on-top">
                                                <div className="form-field__col">
                                                    <label>Семейное положение</label>
                                                    <Select dropdownClassName="with-radio">
                                                        <Option value="married">
                                                            <span className="checkmark"></span>
                                                            <span>В браке</span>
                                                        </Option>
                                                        <Option value="single">
                                                            <span className="checkmark"></span>
                                                            <span>Холост</span>
                                                        </Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="form-field__row">
                                                <div className="form-field__title">Гражданство</div>
                                                <div>
                                                    <Radio.Group>
                                                        <Radio value={1}>РФ</Radio>
                                                        <Radio value={2}>Другое</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            <div className="form-field__row">
                                                <div className="form-field__title">Регистрация</div>
                                                <div>
                                                    <Radio.Group>
                                                        <Radio value={1}>Постоянная</Radio>
                                                        <Radio value={2}>Временная</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className="form-field__col3">
                                    <Collapse expandIconPosition={"right"}>
                                        <Panel header="Работа" key="2" extra={clearALlBtn()}>
                                            <div className="form-field__row">
                                                <div className="form-field__title">Трудоустройство</div>
                                                <div>
                                                    <Radio.Group value={employment} onChange={(e) => setEmployment(e.target.value)}>
                                                        <Radio value={1}>Найм</Radio>
                                                        <Radio value={'ip'}>ИП</Radio>
                                                        <Radio value={3}>Бизнес</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            <div className="form-field__row gray-line">
                                                <Checkbox.Group value={jobList}>
                                                    <div className="checkRow">
                                                        <Checkbox onChange={onChangeJobProps} value={1}>Адвокат или нотариус</Checkbox>
                                                    </div>
                                                    <div className="checkRow">
                                                        <Checkbox onChange={onChangeJobProps} value={2}>Сотрудник силовых структур</Checkbox>
                                                    </div>
                                                </Checkbox.Group>
                                            </div>
                                            <div className="form-field__row label-on-top">
                                                <div className="form-field__col tooltip-top">
                                                    <label>Общий непрерывный стаж</label>
                                                    <Input/>
                                                    <Tooltip placement="rightTop" title="Сумма периодов, в которые клиент фактически работал">
                                                        <InfoCircleFilled style={{ marginLeft: '1rem', color: '#8D8D9B' }}/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="form-field__row label-on-top">
                                                <div className="form-field__col">
                                                    <label>Стаж на текущем месте</label>
                                                    <Input/>
                                                </div>
                                            </div>
                                            <div className="form-field__row label-on-top">
                                                <div className="form-field__col">
                                                    <label>Семейное положение</label>
                                                    <Select dropdownClassName="with-radio" listHeight={290}>
                                                        <Option value={1}>
                                                            <span className="checkmark"></span>
                                                            <span>Выписка из ПФР</span>
                                                        </Option>
                                                        <Option value={2}>
                                                            <span className="checkmark"></span>
                                                            <span>2-НДФЛ</span>
                                                        </Option>
                                                        <Option value={3}>
                                                            <span className="checkmark"></span>
                                                            <span>Справка о доходах от работодателя</span>
                                                        </Option>
                                                        <Option value={4}>
                                                            <span className="checkmark"></span>
                                                            <span>Серый доход</span>
                                                        </Option>
                                                        <Option value={5}>
                                                            <div className="with-desc">
                                                                <div className="row">
                                                                    <span className="checkmark"></span>
                                                                    <span>Без подтверждения</span>
                                                                </div>
                                                                <div className="desc">Ипотека по двум документам</div>
                                                            </div>
                                                        </Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="form-field__row check-right-tooltip">
                                                <div className="check-right-tooltip__left">
                                                    <Checkbox>Не является налоговым резидентом РФ</Checkbox>
                                                </div>
                                                <div className="check-right-tooltip__right">
                                                    <Tooltip placement="rightTop" title="Физическое лицо, которое получает доход за пределами РФ">
                                                        <InfoCircleFilled style={{ marginLeft: '1rem', color: '#8D8D9B' }}/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className="form-field__col3">
                                    <Collapse expandIconPosition={"right"}>
                                        <Panel header="Созаемщики" key="3" extra={clearALlBtn()}>
                                            <div className="form-field__row">
                                                <div className="btn-add">
                                                    <div className="btn-add__icon"><PlusCircleTwoTone /></div>
                                                    <div>Добавить созаемщика</div>
                                                </div>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="credit-list-notification">
                                {renderList.map((credit, index) =>
                                    <div className="credit-list-notification__item" key={index}>
                                        <div className={ credit.errors.length ? "credit-list-notification__warning" : "credit-list-notification__warning ok" }>
                                            { credit.errors.length ? "!" : "ok" }
                                        </div>
                                        <div className="credit-list-notification__name">
                                            {credit.name} {credit.rate.current}%
                                            {(employment === 'ip' && credit.rate.incriment.ip > 0) &&
                                            <span> (ИП + {credit.rate.incriment.ip}%) total: {credit.rate.current + credit.rate.incriment.ip}%</span>
                                            }
                                        </div>
                                        <ul className="credit-list-notification__status">
                                            {credit.errors.map((err, index) =>
                                                <li key={index}>{err.text}</li>
                                            )}
                                        </ul>
                                    </div>
                                )}

                            </div>
                            <div className="calc-next">
                                {!stepComplete ?
                                    <>
                                        <div className="calc-next__text">Вы не можете подобрать предложения, пока данные не будут заполнены корректно</div>
                                        <div className="btn btn-red btn-red--disabled">Подобрать предложения</div>
                                    </>
                                    : noErrorsCredit ?
                                        <div className="btn btn-red" onClick={() => setShowNextStep(true)}>Подобрать предложения</div>
                                        :
                                        <>
                                            <div className="calc-next__text">Ни один кредит не подходит под введенные данные</div>
                                            <div className="btn btn-red btn-red--disabled">Подобрать предложения</div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Calc;