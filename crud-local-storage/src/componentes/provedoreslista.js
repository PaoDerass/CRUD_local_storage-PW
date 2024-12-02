import React from 'react';

const ListaProveedores = ({ proveedores, actualizarProveedor, eliminarProveedor }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lista de Proveedores</h5>
        {proveedores.length === 0 ? (
          <p>No hay proveedores registrados.</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((proveedor) => (
                <tr key={proveedor.id}>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.direccion}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.email}</td>
                  <td>
                    <button 
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => actualizarProveedor(proveedor)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarProveedor(proveedor.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ListaProveedores;
