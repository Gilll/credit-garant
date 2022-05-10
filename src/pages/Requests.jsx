import React from 'react';
import RequestList from "../components/requests/RequestList";

const Requests = () => {
    return (
        <div className="container">
            <div className="left-red-Line">Заявки</div>
            <RequestList/>
        </div>
    );
};

export default Requests;