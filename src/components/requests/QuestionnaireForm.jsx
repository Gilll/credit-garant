import React, {useState} from 'react';
import {Checkbox, Collapse, Input, InputNumber, Progress, Radio, Select, Tooltip} from "antd";
import InputYear from "./InputYear";
import {InfoCircleFilled} from "@ant-design/icons";
import FileUpload from "../FileUpload";

const QuestionnaireForm = ({currentState}) => {
    const { Option } = Select;
    const { Panel } = Collapse;
    const [borrowerWrap, setBorrowerWrap] = useState(false);
    let defaultState = {
        firstName: '',
        lastName: '',
        patronymic: '',
        role: 'borrower',
        maritaStatus: '',
        dateOfBirth: '',
        marriageContract: '',
        citizenship: '',
        registration: '',
        employment: '',
        treaty: '',
        incomeVerification: 'ndfl',
        fullExperience: '',
        lastExperience: '',
        share: '',
        participates: false
    }

    const [questionnaire, setQuestionnaire] = useState(Object.assign(defaultState, currentState));

    const getBorrowerFormProgress = () => {
        let complite = 0, all = 7;
        if (questionnaire.firstName) { complite++; }
        if (questionnaire.lastName) { complite++; }
        if (questionnaire.patronymic) { complite++; }
        if (questionnaire.dateOfBirth) { complite++; }
        if (questionnaire.maritaStatus) { complite++; }
        if (questionnaire.citizenship) { complite++; }
        if (questionnaire.registration) { complite++; }
        if (questionnaire.role === 'borrower' || (questionnaire.role === 'co-borrower' && questionnaire.participates)) {
            all += 3;
            if (questionnaire.fullExperience) { complite++; }
            if (questionnaire.lastExperience) { complite++; }
            if (questionnaire.employment) {
                complite++;
                if (questionnaire.employment === 'hiring') {
                    all++;
                    if (questionnaire.treaty) { complite++; }
                }
                if (questionnaire.employment === 'business') {
                    all++;
                    if (questionnaire.share) { complite++; }
                }
            }
        }
        return Math.ceil(complite/all*100);
    }

    return (
        <div className="collapse-form">
            <div className="collapse-form__title">
                <div className={
                    (questionnaire.firstName || questionnaire.lastName || questionnaire.patronymic) ?
                        "collapse-form__title-left active" : "collapse-form__title-left"}>
                    <div className="collapse-form__title-name">{{
                        'borrower': '??????????????',
                        'co-borrower': '??????????????????',
                        'guarantor': '????????????????????'
                    }[questionnaire.role]}</div>
                    <div className="collapse-form__title-active-name">
                        <span>{questionnaire.lastName} </span>
                        <span>{questionnaire.firstName} </span>
                        <span>{questionnaire.patronymic}</span>
                    </div>
                </div>
                <div className="collapse-form__title-right">
                    <Progress percent={getBorrowerFormProgress()} status="active" />
                </div>
            </div>
            <Collapse bordered={false} activeKey={borrowerWrap ? ['1'] : []}>
                <Panel key="1">
                    <div className="collapse-form__content">
                        <div className="form-field">
                            <div className="left-red-Line">?????????? ????????????</div>
                            <div className="form-field__row form-field__row--flex label-on-top">
                                <div className="form-field__col3m">
                                    <label>??????????????</label>
                                    <Input
                                        value={questionnaire.lastName}
                                        onChange={(e) => setQuestionnaire({...questionnaire, lastName: e.target.value})}
                                    />
                                </div>
                                <div className="form-field__col3m">
                                    <label>??????</label>
                                    <Input
                                        value={questionnaire.firstName}
                                        onChange={(e) => setQuestionnaire({...questionnaire, firstName: e.target.value})}
                                    />
                                </div>
                                <div className="form-field__col3m">
                                    <label>????????????????</label>
                                    <Input
                                        value={questionnaire.patronymic}
                                        onChange={(e) => setQuestionnaire({...questionnaire, patronymic: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-field__row form-field__row--flex label-on-top">
                                <div className="form-field__col3m">
                                    <label>???????????????? ??????????????????</label>
                                    <Select
                                        dropdownClassName="with-radio"
                                        value={questionnaire.maritaStatus}
                                        onChange={(value) => setQuestionnaire({...questionnaire, maritaStatus: value})}
                                    >
                                        <Option value="married">
                                            <span className="checkmark"></span>
                                            <span>?? ??????????</span>
                                        </Option>
                                        <Option value="single">
                                            <span className="checkmark"></span>
                                            <span>????????????</span>
                                        </Option>
                                    </Select>
                                </div>
                                <div className="form-field__col3m">
                                    <label>???????? ????????????????</label>
                                    <Input
                                        value={questionnaire.dateOfBirth}
                                        onChange={(e) => setQuestionnaire({...questionnaire, dateOfBirth: e.target.value})}
                                    />
                                </div>
                                <div className="form-field__col3m">
                                    <label>???????? ?? ????????????</label>
                                    <Select
                                        dropdownClassName="with-radio"
                                        value={questionnaire.role}
                                        onChange={(value) => setQuestionnaire({...questionnaire, role: value})}
                                        disabled={questionnaire.role === 'borrower'}
                                    >
                                        <Option value="co-borrower">
                                            <span className="checkmark"></span>
                                            <span>??????????????????</span>
                                        </Option>
                                        <Option value="guarantor">
                                            <span className="checkmark"></span>
                                            <span>????????????????????</span>
                                        </Option>
                                    </Select>
                                </div>
                            </div>
                            {questionnaire.role === 'co-borrower' &&
                            <div className="form-field__row mr">
                                <Checkbox
                                    checked={questionnaire.participates}
                                    onChange={(e) => setQuestionnaire({...questionnaire, participates: e.target.checked})}
                                >?????????????????? ?? ????????????????</Checkbox>
                            </div>
                            }
                            { (questionnaire.maritaStatus === 'married' && questionnaire.role === 'borrower') &&
                            <div className="form-field__row">
                                <div className="form-field__title">?????????????? ??????????????</div>
                                <Radio.Group
                                    value={questionnaire.marriageContract}
                                    onChange={(e) => setQuestionnaire({...questionnaire, marriageContract: e.target.value})}
                                >
                                    <Radio value={1}>????????</Radio>
                                    <Radio value={0}>??????</Radio>
                                </Radio.Group>
                            </div>
                            }
                            <div className="form-field__gray-line"></div>
                            <div className="left-red-Line">??????????????????????</div>
                            <div className="form-field__row form-field__row--flex">
                                <div className="form-field__col2">
                                    <div className="form-field__title">??????????????????????</div>
                                    <Radio.Group
                                        value={questionnaire.citizenship}
                                        onChange={(e) => setQuestionnaire({...questionnaire, citizenship: e.target.value})}
                                    >
                                        <Radio value={"RF"}>???????????????????? ??????????????????</Radio>
                                        <Radio value={"other"}>????????????</Radio>
                                    </Radio.Group>
                                </div>
                                <div className="form-field__col2 lc">
                                    <div className="form-field__title">??????????????????????</div>
                                    <Radio.Group
                                        value={questionnaire.registration}
                                        onChange={(e) => setQuestionnaire({...questionnaire, registration: e.target.value})}
                                    >
                                        <Radio value={"constant"}>????????????????????</Radio>
                                        <Radio value={"temporary"}>??????????????????</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            {questionnaire.citizenship === "other" &&
                            <div className="form-field__row">
                                <div className="form-field__title">???????????????????????????? ????????????</div>
                                <div className="form-field__row less">
                                    <Checkbox>???????? ?????? ???? ???????????????????? ?? ????</Checkbox>
                                </div>
                                <div className="form-field__row less">
                                    <Checkbox>?????????????? ?????? ???????? ?????? ??????????????????????</Checkbox>
                                </div>
                                <div className="form-field__row less">
                                    <Checkbox>???????? ???????????????????????? ????????????</Checkbox>
                                </div>
                            </div>
                            }
                            {(questionnaire.role === 'borrower' || (questionnaire.role === 'co-borrower' && questionnaire.participates)) && <>
                                <div className="form-field__gray-line"></div>
                                <div className="left-red-Line">????????????</div>
                                <div className="form-field__row form-field__row--flex">
                                    <div className="form-field__col2">
                                        <div className="form-field__title">??????????????????????????????</div>
                                        <Radio.Group
                                            value={questionnaire.employment}
                                            onChange={(e) => setQuestionnaire({...questionnaire, employment: e.target.value})}
                                        >
                                            <Radio value={"hiring"}>????????</Radio>
                                            <Radio value={"ip"}>????</Radio>
                                            <Radio value={"business"}>????????????</Radio>
                                        </Radio.Group>
                                    </div>
                                    {questionnaire.employment === 'hiring' &&
                                    <div className="form-field__col2 lc">
                                        <div className="form-field__title">??????????????</div>
                                        <Radio.Group
                                            value={questionnaire.treaty}
                                            onChange={(e) => setQuestionnaire({...questionnaire, treaty: e.target.value})}
                                        >
                                            <Radio value={"labor"}>????????????????</Radio>
                                            <Radio value={"gph"}>??????</Radio>
                                        </Radio.Group>
                                    </div>
                                    }
                                </div>
                                <div className="form-field__row">
                                    <div className="form-field__title">???????????????????????????? ????????????</div>
                                    {questionnaire.employment !== 'business' &&
                                    <div className="form-field__row less">
                                        <Checkbox>?????????????? ?????? ????????????????</Checkbox>
                                    </div>
                                    }
                                    {(questionnaire.employment === 'hiring' || questionnaire.employment === '') &&
                                    <div className="form-field__row less">
                                        <Checkbox>?????????????????? ?????????????? ????????????????</Checkbox>
                                    </div>
                                    }
                                    <div className="form-field__row less">
                                        <Checkbox>???????? ?????????????????? ???? ?????????????? ????????????????</Checkbox>
                                    </div>
                                </div>
                                <div className="form-field__row form-field__row--flex label-on-top">
                                    <div className="form-field__col3m">
                                        <label>?????????????????????????? ????????????</label>
                                        <Select
                                            dropdownClassName="with-radio"
                                            value={questionnaire.incomeVerification}
                                            onChange={(value) => setQuestionnaire({...questionnaire, incomeVerification: value})}
                                        >

                                            <Option value="pfr">
                                                <span className="checkmark"></span>
                                                <span>?????????????? ???? ??????</span>
                                            </Option>
                                            <Option value="ndfl">
                                                <span className="checkmark"></span>
                                                <span>2-????????</span>
                                            </Option>
                                            <Option value="reference">
                                                <span className="checkmark"></span>
                                                <span>?????????????? ?? ??????????????</span>
                                            </Option>
                                            <Option value="grayIncome">
                                                <span className="checkmark"></span>
                                                <span>?????????? ??????????</span>
                                            </Option>
                                            <Option value="withoutConfirmation">
                                                <span className="checkmark"></span>
                                                <span>?????? ??????????????????????????</span>
                                            </Option>
                                        </Select>
                                    </div>
                                    <div className="form-field__col3m input-year tooltip-top">
                                        <label>?????????? ?????????????????????? ????????</label>
                                        <InputYear value={questionnaire.fullExperience}
                                                   onChange={(value) => setQuestionnaire({...questionnaire, fullExperience: value})}/>
                                        <Tooltip placement="rightTop" title="?????????? ????????????????, ?? ?????????????? ???????????? ???????????????????? ??????????????">
                                            <InfoCircleFilled style={{ marginLeft: '1rem', color: '#8D8D9B' }}/>
                                        </Tooltip>
                                    </div>
                                    <div className="form-field__col3m input-year">
                                        <label>{{
                                            '': '???????? ???? ?????????????? ??????????',
                                            hiring: '???????? ???? ?????????????? ??????????',
                                            business: '???????? ???????????????? ????????????????',
                                            ip: '???????? ???????????????? ????',
                                        }[questionnaire.employment]}</label>
                                        <InputYear value={questionnaire.lastExperience}
                                                   onChange={(value) => setQuestionnaire({...questionnaire, lastExperience: value})}/>
                                    </div>
                                </div>
                                {questionnaire.employment === 'business' &&
                                <div className="form-field__row form-field__row--flex label-on-top">
                                    <div className="form-field__col3m">
                                        <label>????????, %</label>
                                        <InputNumber
                                            min={1}
                                            max={100}
                                            value={questionnaire.share}
                                            onChange={(value) => setQuestionnaire({...questionnaire, share: value})}
                                        />
                                    </div>
                                </div>
                                }
                                <div className="form-field__row">
                                    <Checkbox>
                                        ???? ???????????????? ?????????????????? ???????????????????? ????
                                        <Tooltip placement="rightTop" title="?????????????? ?????? ??????????, ?? ?????????????? ?? 01.01.2018 ???? 31.12.2022 ?????????????? ??????????????">
                                            <InfoCircleFilled style={{ marginLeft: '1rem', color: '#8D8D9B' }}/>
                                        </Tooltip>
                                    </Checkbox>
                                </div>
                            </>}
                            <div className="form-field__gray-line"></div>
                            <div className="left-red-Line">??????????????????</div>
                            <div className="form-field__doc-title">??????????????</div>
                            <FileUpload/>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <div className={borrowerWrap ? "collapse-form__btn active" : "collapse-form__btn"}>
                <div className="collapse-form__btn-box" onClick={() => setBorrowerWrap(!borrowerWrap)}>
                    <div className="collapse-form__btn-text">
                        <span className="active">????????????????</span>
                        <span className="inactive">????????????????????</span>
                        <span> ????????????</span>
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

export default QuestionnaireForm;