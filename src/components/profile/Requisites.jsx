import React, {useState} from 'react';
import RequisitesChoise from "./RequisitesChoise";
import FormSelfEmployes from "./FormSelfEmployes";
import FormIp from "./FormIP";
import FormPerson from "./FormPerson";
import FormEntity from "./FormEntity";

const Requisites = () => {
    const [emptyState, setEmptyState] = useState(false);
    const [requsitesType, setRequsitesType] = useState(-1);
    const [nestStep, setNextStep] = useState(false);

    return (
        <div className="profile-container">
            <div className="left-red-Line">Реквизиты</div>
            {emptyState ?
                <div className="requisites-empty">
                    <div className="requisites-empty__title">У вас еще не указаны реквизиты</div>
                    <div className="requisites-empty__text">По ним мы сможем переводить заработанный вами бонус за закрытые сделки</div>
                    <div className="btn btn-red" onClick={setEmptyState(true)}>Указать реквизиты</div>
                </div>
                :
                <div className="requisites-wrap">
                    <div className="requisites__desc">По вашим указанным реквизитам, мы в дальнейшем переводим заработанный вами бонус за закрытые сделки</div>
                    <div className="requisites__type-choise">
                        <div className="left-red-Line less">Выберите организационно-правовую форму</div>
                        <RequisitesChoise onChange={setRequsitesType}/>
                    </div>
                    {nestStep ?
                        {
                            0: <FormSelfEmployes/>,
                            1: <FormIp/>,
                            2: <FormEntity/>,
                            3: <FormPerson/>,
                        }[requsitesType]
                        :
                        <div className="requisites__next">
                            {requsitesType < 0 ?
                                <div className="requisites__next-desc">Вы не сможете перейти к следующему шагу, пока не выберете организационно-правовую форму</div>
                                :
                                <></>
                            }
                            <div className={requsitesType < 0 ? "btn btn-red btn-red--disabled" : "btn btn-red"} onClick={() => setNextStep(true)}>Далее</div>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Requisites;