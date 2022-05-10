import React, {useState} from 'react';
import RequestItemShort from "./RequestItemShort";

const RequestsShortList = ({requests, activeItem, changeActive}) => {

    return (
        <div className="requests-sl-wrap">
            {requests.length
                ? requests.map((request, index) =>
                        <RequestItemShort
                            activeClass={activeItem === index}
                            request={request}
                            key={request.id}
                            cb={changeActive}
                            ind={index}
                        />
                )
                : <div className="requests-sl-wrap__empty">Нет заявок данного типа</div>
            }
        </div>
    );
};

export default RequestsShortList;