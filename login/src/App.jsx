import React, { useState } from 'react';
import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador';
import Alert from './components/Alert/Alert';
import { BaseColaboradores } from './data/BaseColaboradores';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = nuevoColaborador => {
    if (Object.values(nuevoColaborador).some(valor => valor.trim() === '')) {
      setAlerta({ mensaje: 'Todos los campos deben estar llenos.', tipo: 'danger' });
      return;
    }
    nuevoColaborador.id = Date.now().toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlerta({ mensaje: 'Colaborador agregado con éxito.', tipo: 'success' });
  };

  const eliminarColaborador = id => {
    setColaboradores(colaboradores.filter(col => col.id !== id));
    setAlerta({ mensaje: 'Colaborador eliminado con éxito.', tipo: 'success' });
  };

  const filtrarColaboradores = textoBusqueda => {
    setBusqueda(textoBusqueda.toLowerCase());
  };

  const colaboradoresFiltrados = colaboradores.filter(col =>
    Object.values(col).some(valor => valor.toString().toLowerCase().includes(busqueda))
  );

  return (
    <div className="app-container">
      {alerta.mensaje && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <Buscador buscarColaborador={filtrarColaboradores} />
      <Formulario agregarColaborador={agregarColaborador} />
      <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
    </div>
  );
}

export default App;
