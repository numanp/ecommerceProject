import React from 'react';

var arregloProductos = [
    {
        producto: 'Producto',
        precio: 150,
        categoria: ['Categoria1', 'Categoria2'],
        stock: 40,
        disponibilidad: 'Disponible'
    },
    {
        producto: 'Producto2',
        precio: 250,
        categoria: ['cosita', 'asdasd'],
        stock: 4,
        disponibilidad: 'Disponible'
    },
    {
        producto: 'Producto3',
        precio: 150,
        categoria: ['Categoria1', 'Categoria2'],
        stock: 20,
        disponibilidad: 'No disponible'
    },
    {
        producto: 'Producto 4',
        precio: 1550,
        categoria: ['Zapatillas', 'Otra'],
        stock: 10,
        disponibilidad: 'Disponible'
    },
]
    //DEBE RECIBIR UN ARREGLO DE OBJETOS DE TODOS LOS PRODUCTOS Y HACE UN DISPLAY DE CADA UNO

// export default (props) => (
// <div className='container-fluid' id="AdminAddCategory" >
//     <div className='container' >
//     <Link to='/admin'>
//         <button className='btn btn-primary'>
//         <span className="
//             glyphicon glyphicon-chevron-left">
//                 Back
//             </span>
//         </button>
//         </Link>

//     <div className="container-fluid" id="AdminEditProduct">
//         <h1>Productos</h1>
//         <table className="table table-striped">
//             <tbody>


//                 <tr>
//                     <th>Producto</th>
//                     <th>Precio</th>
//                     <th>Categoria</th>
//                     <th>Stock</th>
//                     <th>Disponibilidad</th>
//                     <th>Editar</th>
//                 </tr>
//                 <tr>
//                     <div>
//                         {
//                             /*
//                              arregloProductos.map(producto => (    
//                                  <td>ALgo</td>
//                                  <td>ALgo</td>  <td>{producto.precio}</td>,
//                                  <td>ALgo</td> <td>{producto.categoria}</td>,
//                                  <td>ALgo</td> <td>{producto.stock}</td>,
//                                  <td>ALgo</td><td>{producto.disponibilidad} <button className="btn btn-success"> EDITAR</button></td>
//                                  <td>ALgo</td><td>{producto.disponibilidad} <button className="btn btn-success"> EDITAR</button></td>
//                                  <td>ALgo</td>
//                             ))
//                             */
//                         }
//                     </div>
//                 </tr>
//                 <tr>
//                     <td>Jill</td>
//                     <td>Smith</td>
//                     <td>Categoria 1, categoria 2</td>
//                     <td>50</td>
//                     <td>50</td>
//                     <td><button className="btn btn-primary">EDITAR PRODUCTO</button></td>

//                 </tr>
//                 <tr>
//                     <td>Jill</td>
//                     <td>Smith</td>
//                     <td>Categoria 1, categoria 2</td>
//                     <td>50</td>
//                     <td>50</td>
//                     <td><button className="btn btn-primary">EDITAR PRODUCTO</button></td>

//                 </tr>
//             </tbody>
//         </table>
//     </div>
// );
