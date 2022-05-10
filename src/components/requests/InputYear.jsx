import React, {useState} from 'react';
import {InputNumber} from "antd";
import {declOfNum} from "../../utils/declension";

const InputYear = ({onChange, value}) => {
    const [declYear, setDecl] = useState(value ? declOfNum(value, ['год', 'года', 'лет']) : '');

    function onChangeYears(val) {
        setDecl(val ? declOfNum(val, ['год', 'года', 'лет']) : '');
        onChange(val);
    }
    return (
        <InputNumber min={1} max={30} value={value} addonAfter={declYear} onChange={onChangeYears}/>
    );
};

export default InputYear;