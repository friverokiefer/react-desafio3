import React from 'react';
import "./Alert.css";

function Alert({ mensaje, tipo }) {
    return (
        <div className={`alert ${tipo}`}>
        {mensaje}
        </div>
    );
}

export default Alert;
