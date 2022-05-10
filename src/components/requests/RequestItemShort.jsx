import React from 'react';

const RequestItemShort = ({request, cb, activeClass, ind}) => {

    const callCB = () => {
        cb(ind);
    }

    return (
        <div className={activeClass ? 'requests-sl-wrap__item active' : 'requests-sl-wrap__item'}>
            <div className="requests-sl-wrap__line">
                <div className="requests-sl-wrap__icon">
                    <img src={request.logo} alt=""/>
                </div>
                <div className="requests-sl-wrap__text">
                    <div className="requests-sl-wrap__name">
                        <span onClick={callCB}>№ {request.id} - {request.bankName}</span>
                    </div>
                    <div className="requests-sl-wrap__props">
                        <span>{request.rate}%</span>
                        <span>{request.sum} ₽</span>
                    </div>
                </div>
            </div>
            <div className="requests-sl-wrap__stage">
                <span>{request.stage}</span>
                {request.stageStatus
                    ? <><span className="requests-sl-wrap__dot"></span><span>{request.stageStatus}</span></>
                    : <></>
                }
            </div>
        </div>
    );
};

export default RequestItemShort;