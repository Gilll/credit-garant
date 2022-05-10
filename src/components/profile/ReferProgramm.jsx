import React from 'react';
import Collapse from "antd/es/collapse";

const ReferProgramm = () => {
    const { Panel } = Collapse;
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

    return (
        <div className="profile-container">
            <div className="left-red-Line">Реферальная программа</div>
            <div className="refer-intro">
                <div className="refer-intro__title">Приведи друга - получи 10 000 ₽</div>
                <div className="refer-intro__desc">Подарим вам 10 000 ₽ за первую сделку, которую совершит человек, зарегистрировавшийся по вашей ссылке</div>
                <div className="refer-intro__link">Как это работает</div>
                <div className="refer-intro__action">
                    <div className="btn btn-red">Получить реферальную ссылку</div>
                    <div className="refer-intro__desc">Соглашение об условиях использования платформы</div>
                </div>
            </div>
            <div className="left-red-Line">Вопросы и ответы</div>
            <div className="refer-faq">
                <div className="refer-faq__col">
                    <Collapse>
                        <Panel showArrow={false} header="Насколько ставки на платформе выше для клиента, чем на рынке?" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header={<div>Что нужно сделать, чтобы заработать?</div>} key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header="Почему у вас в партнерах не все банки?" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header="Что требуется, чтобы получить деступ?" key="4">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div className="refer-faq__col">
                    <Collapse>
                        <Panel showArrow={false} header="Насколько ставки на платформе выше для клиента, чем на рынке?" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header="Что нужно сделать, чтобы заработать?" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header="Почему у вас в партнерах не все банки?" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel showArrow={false} header="Что требуется, чтобы получить деступ?" key="4">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default ReferProgramm;