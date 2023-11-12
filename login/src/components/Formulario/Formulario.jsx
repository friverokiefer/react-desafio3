import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ agregarColaborador }) {
    const [colaborador, setColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const handleChange = e => {
        setColaborador({ ...colaborador, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        agregarColaborador(colaborador);
        setColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
    };

    return (
        <div className="formulario-container">
            <h3>Agregar Colaborador</h3>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-field">
                    <label htmlFor="nombre">Nombre del colaborador</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={colaborador.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="correo">Email del colaborador</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={colaborador.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="edad">Edad del colaborador</label>
                    <input
                        type="text"
                        id="edad"
                        name="edad"
                        value={colaborador.edad}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="cargo">Cargo del colaborador</label>
                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={colaborador.cargo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="telefono">Teléfono del colaborador</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={colaborador.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-agregar">Agregar Colaborador</button>
            </form>
        </div>
    );
}

export default Formulario;
