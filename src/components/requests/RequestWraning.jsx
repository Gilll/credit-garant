import React from 'react';

const RequestWraning = ({text}) => {
    return (
        <div className="request-warning">
            <div className="request-warning__icon">!</div>
            <div className="request-warning__text">
                <div className="request-warning__bold">{text}</div>
                <div className="request-warning__desc">Она работает в режиме чтения</div>
            </div>
            <div className="btn btn-red">Вернуть в работу</div>
        </div>
    );
};

export default RequestWraning;