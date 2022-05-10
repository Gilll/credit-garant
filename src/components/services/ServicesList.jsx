import React from 'react';

const ServicesList = ({services}) => {
    return (
        <>
            {services.map((item, index) =>
                <div className="services-list__item" key={index}>
                    <div className="services-list__name">{ item.name }</div>
                    <div className="services-list__count">{ item.mess }</div>
                </div>
            )}
        </>
    );
};

export default ServicesList;