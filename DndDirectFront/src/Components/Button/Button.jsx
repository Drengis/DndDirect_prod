import React from 'react';

function Button(props) {
    return (
        <button type="button" className="btn btn-secondary" onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Button;