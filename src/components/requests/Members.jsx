import React from 'react';
import QuestionnaireForm from "./QuestionnaireForm";

const Members = ({membersList}) => {
    return (
        <>
            {membersList.map((member, index) =>
                <QuestionnaireForm currentState={member} key={index}/>
            )}
        </>
    );
};

export default Members;