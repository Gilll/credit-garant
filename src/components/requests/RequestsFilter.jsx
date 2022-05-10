import React, {useState} from 'react';
import {Button, Checkbox, Dropdown, Input, Select} from "antd";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import FilterStatusCol from "./FilterStatusCol";

const RequestsFilter = () => {
    const {Option} = Select;
    const [statusDropdowpVisible, setStatusDropdowpVisible] = useState(false);
    const questionaryItems = {
        title: 'Анкета и одобрение',
        items: [
            'Заполнение анкеты',
            'Процессинг',
            'В банке',
            'На доработке',
            'Кредит одобрен',
            'Кредит не одобрен'
        ]
    }

    const menu = (
        <div className='status-dropdown' onClick={() => setStatusDropdowpVisible(true)}>
            <div className="status-dropdown__title">
                <span className="pre">Показать все заявки:</span>
                <span>На доработке</span>
                <div className="dot-mid"></div>
                <span>Одобренные</span>
            </div>
            <div className="form-field__row form-field__row--flex">
                <FilterStatusCol items={questionaryItems}/>
                <div className="form-field__col4">
                    <div className="form-field__col4-item form-field__col4-item--title">
                        <Checkbox>Недвижимость</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Заказ оценки</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>На доработке</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>У куратора</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Процессинг</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>В банке</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Недвижимость одобрена</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Недвижимость отклонена</Checkbox>
                    </div>
                </div>
                <div className="form-field__col4">
                    <div className="form-field__col4-item form-field__col4-item--title">
                        <Checkbox>Страховка</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Заказ страховки</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>На доработке</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>У куратора</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Процессинг</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>В банке</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Письмо-заключение согласовано</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Письмо-заключение отклонено</Checkbox>
                    </div>
                </div>
                <div className="form-field__col4">
                    <div className="form-field__col4-item form-field__col4-item--title">
                        <Checkbox>Сделка</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Согласование дат</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Банк предложил даты сделки</Checkbox>
                    </div>
                    <div className="form-field__col4-item">
                        <Checkbox>Дата согласована</Checkbox>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='requests-fiter'>
            <div className="form-field">
                <div className="form-field__row form-field__row--flex label-on-top">
                    <div className="form-field__search">
                        <label>Поиск</label>
                        <Input.Search placeholder="ФИО" allowClear />
                    </div>
                    <div className="form-field__type">
                        <label>Цель кредита</label>
                        <Select defaultValue="all" dropdownClassName="with-radio">
                            <Option value="all">
                                <span className="checkmark"></span>
                                <span>Все</span>
                            </Option>
                            <Option value="refinancing">
                                <span className="checkmark"></span>
                                <span>Рефинансиро...</span>
                            </Option>
                            <Option value="mortgage">
                                <span className="checkmark"></span>
                                <span>Ипотека</span>
                            </Option>
                        </Select>
                    </div>
                    <div className="form-field__bank">
                        <label>Банки</label>
                        <Select defaultValue="all" dropdownClassName="with-radio">
                            <Option value="all">
                                <span className="checkmark"></span>
                                <span>Все</span>
                            </Option>
                            <Option value="alpa">
                                <span className="checkmark"></span>
                                <span>Альфабанк</span>
                            </Option>
                        </Select>
                    </div>
                    <div className="form-field__status">
                        <label>Статус</label>
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight"
                                  visible={statusDropdowpVisible}
                                  onVisibleChange={setStatusDropdowpVisible}
                        >
                            <Button onClick={() => setStatusDropdowpVisible(!statusDropdowpVisible)}>
                                Все <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>

                    <div className="form-field__time">
                        <label>Одобрение истекает через</label>
                        <Select defaultValue="all" dropdownClassName="with-radio">
                            <Option value="all">
                                <span className="checkmark"></span>
                                <span>Любое время</span>
                            </Option>
                            <Option value="1">
                                <span className="checkmark"></span>
                                <span>1 месяц</span>
                            </Option>
                            <Option value="2">
                                <span className="checkmark"></span>
                                <span>2 месяца</span>
                            </Option>
                            <Option value="3">
                                <span className="checkmark"></span>
                                <span>3 месяца</span>
                            </Option>
                            <Option value="4">
                                <span className="checkmark"></span>
                                <span>4 месяца</span>
                            </Option>
                        </Select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RequestsFilter;