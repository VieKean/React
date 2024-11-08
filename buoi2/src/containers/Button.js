import React from 'react';

function Button({ label, onClick, style }) {
    return (
        <button onClick={onClick} style={style}>
            {label}
        </button>
    );
}

export default Button;
