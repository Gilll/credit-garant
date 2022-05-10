import React from 'react';

const ClearAllBtn = (props) => {
    return (
        <div className="clear-all-btn" onClick={props.onClick}>
            <svg className="icon-trash" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" />
                <path d="M7.08203 4.14175L7.26536 3.05008C7.3987 2.25841 7.4987 1.66675 8.90703 1.66675H11.0904C12.4987 1.66675 12.607 2.29175 12.732 3.05841L12.9154 4.14175"/>
                <path d="M15.7096 7.6167L15.168 16.0084C15.0763 17.3167 15.0013 18.3334 12.6763 18.3334H7.3263C5.0013 18.3334 4.9263 17.3167 4.83464 16.0084L4.29297 7.6167"/>
                <path d="M8.60938 13.75H11.3844"/>
                <path d="M7.91797 10.4167H12.0846"/>
            </svg>
            <span>Очистить все</span>
        </div>
    );
};

export default ClearAllBtn;