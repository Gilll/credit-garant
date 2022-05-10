import React from 'react';

const RequestsEmpty = ({text, description}) => {
    return (
        <div className="request-list-empty">
            <div className="request-list-empty__icon">
                <svg className="icon-docs" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15.25H18.75"/>
                    <path d="M10 20.25H15.475"/>
                    <path d="M12.5 7.5H17.5C20 7.5 20 6.25 20 5C20 2.5 18.75 2.5 17.5 2.5H12.5C11.25 2.5 10 2.5 10 5C10 7.5 11.25 7.5 12.5 7.5Z"/>
                    <path d="M20 5.0249C24.1625 5.2499 26.25 6.7874 26.25 12.4999V19.9999C26.25 24.9999 25 27.4999 18.75 27.4999H11.25C5 27.4999 3.75 24.9999 3.75 19.9999V12.4999C3.75 6.7999 5.8375 5.2499 10 5.0249"/>
                </svg>
            </div>
            <div className="request-list-empty__text">{text}</div>
            <div className="request-list-empty__description">{description}</div>
        </div>
    );
};

export default RequestsEmpty;