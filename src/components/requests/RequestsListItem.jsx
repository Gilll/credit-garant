import React from 'react';
import RequestSubItem from "./RequestSubItem";

const RequestsListItem = ({data}) => {
    return (
        <>
            {data.map((item, index) =>
                <div className='requests-list__item' key={index}>
                    <div className="requests-list__title">
                        <div className="short-name">{item.shortName}</div>
                        <div className="user-name">{item.name}</div>
                        <div className="requests-list__status">
                            <div className="requests-list__step">{item.step}</div>
                            <div className="dot-mid"></div>
                            <div className="requests-list__short-info">{item.shortInfo}</div>
                        </div>
                    </div>
                    <RequestSubItem itemList={item.subs}/>
                </div>
            )}
        </>
    );
};

export default RequestsListItem;