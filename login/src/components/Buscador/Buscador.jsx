import React from 'react';
import './Buscador.css';

function Buscador({ buscarColaborador }) {
    return (
        <input
        type="text"
        className="buscador-input"
        placeholder="Buscar colaborador..."
        onChange={(e) => buscarColaborador(e.target.value)}
        />
    );
}

export default Buscador;
