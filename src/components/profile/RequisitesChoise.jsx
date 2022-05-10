import React, {useState} from 'react';
import IconCheckmark from "../icons/IconCheckmark";
import IconGlass from "../icons/IconGlass";
import IconBriefcase from "../icons/IconBriefcase";
import IconCalc2 from "../icons/IconCalc2";
import IconCrown from "../icons/IconCrown";

const RequisitesChoise = ({onChange}) => {
    const [curState, setCurState] = useState(-1);
    const rcContent = [
        { icon: <IconCrown/>, title: 'Самозанятый', desc: 'Зачисление денег на ваш счет без комиссии. Вы самостоятельно платите государству налог на доход 6%'},
        { icon: <IconCalc2/>, title: 'ИП', desc: 'Зачисление денег на ваш счет без комиссии. Вы самостоятельно платите государству налог на доход 6% и обязательные взносы'},
        { icon: <IconBriefcase/>, title: 'Юрлицо', desc: 'Зачисление денег на ваш счет без комиссии. Вы самостоятельно платите государству налог на доход 6% и обязательные взносы'},
        { icon: <IconGlass/>, title: 'Физлицо', desc: 'Зачисление денег на ваш счет без комиссии. Вы самостоятельно платите государству налог на доход 13%'}
    ]

    return (
        <div className="requisites-choise">
            {rcContent.map((item, index) =>
                <div
                    className={curState === index ? "requisites-choise__item active" : "requisites-choise__item" }
                    key={index}
                    onClick={() => { if (curState !== index) { setCurState(index); onChange(index); }}}
                >
                    <div className="requisites-choise__icon">
                        {item.icon}
                    </div>
                    <div className="requisites-choise__checkmark">
                        <IconCheckmark/>
                    </div>
                    <div className="requisites-choise__title">{item.title}</div>
                    <div className="requisites-choise__desc">{item.desc}</div>
                </div>
            )}
        </div>
    );
};

export default RequisitesChoise;