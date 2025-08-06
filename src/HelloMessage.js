import React from 'react';

function HelloMessage(props) {
    return (
        console.log(props),
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    );
}

export default HelloMessage;