import React from 'react';


const test = (props: any) => {
    return (
        <h1>
            {props.users.name}
            AccountID: {props.users.details.accountNo}
        </h1>
    )
};

export default test;