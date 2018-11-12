import React from 'react';

export default props => (
  <div className="container">
    <div className="col-md-10 col-md-offset-1">
      <div>
        {props.orders && props.user ? (
          <div>
            <h2>Datos Usuario:</h2>
            <p>Nombre : {props.user.nombre}</p>
            <p>Apellido: {props.user.apellido}</p>
            <p>Email: {props.user.email}</p>
            <p>Telefono: {props.user.telefono}</p>
          </div>
        ) : (
          <div />
        )}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Orden de Compra</th>
            <th> Status</th>
            <th> Importe</th>
            <th> Fecha</th>
            <th> Dirección</th>
            <th> Email</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {console.log(props.orders)}
          {props.orders.length > 0 ? (
            props.orders.map(order => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.status}</td>
                  <td>{order.importe}</td>
                  <td>{order.fecha}</td>
                  <td>{order.direccion}</td>
                  <td>{order.email}</td>
                  <td>
                    <button>Detalles de Compra</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                {' '}
                <p>Este usuario no tiene ordenes</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
