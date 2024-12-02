import React, { useState, useEffect } from 'react';
import FormularioProveedores from './componentes/FormularioProveedores';
import ListaProveedores from './componentes/ListaProveedores';

function App() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const proveedoresGuardados = JSON.parse(localStorage.getItem('proveedores')) || [];
    setProveedores(proveedoresGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  }, [proveedores]);

  const agregarProveedor = (proveedor) => {
    setProveedores([...proveedores, proveedor]);
  };

  const actualizarProveedor = (proveedorActualizado) => {
    setProveedores(
      proveedores.map((p) => (p.id === proveedorActualizado.id ? proveedorActualizado : p))
    );
  };

  const eliminarProveedor = (id) => {
    setProveedores(proveedores.filter((p) => p.id !== id));
  };

  return (
    <div className="container my-4">
      <h1 className="text-center text-primary">Gestión de Proveedores</h1>
      <FormularioProveedores agregarProveedor={agregarProveedor} />
      <ListaProveedores
        proveedores={proveedores}
        actualizarProveedor={actualizarProveedor}
        eliminarProveedor={eliminarProveedor}
      />
    </div>
  );
}

export default App;
