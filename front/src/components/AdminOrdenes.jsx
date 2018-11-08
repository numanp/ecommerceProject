import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

export default class AdminOrdenes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ordenes: [],
            isOpen: false,
            selectedStatus: '',
            selectedOrders: []
        }
        this.selectedStatus = this.selectedStatus.bind(this)
    }

    componentDidMount() {
        axios.get('/api/ventas')
        .then( res => this.setState({ ordenes: res.data }))
    }
    
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    selectedStatus = (status) => {
        this.setState({ selectedStatus: status })

        var ordenes = this.state.ordenes
        var estado = this.state.selectedStatus
        var ordenesFiltradas = [];

        for (var i = 0; i < ordenes.length; i++) {
            if (ordenes[i].status == this.state.selectedStatus) {
                ordenesFiltradas.push(ordenes[i]);
            }
        }
        
        this.setState({ selectedOrders: ordenesFiltradas })
        
        console.log('ordenes totales: ',ordenes, ' - estado: ',estado, ' - ordenes filtradas: ', ordenesFiltradas)
    }


    
    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div>
            <div className="container">
                <h1 className="h1-adminOrdenes">Manejo de ordenes</h1>
                <div className="btn-group" onClick={this.toggleOpen}>
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filtrar por Status <span className="caret"></span>
                    </button>
                    <ul className={menuClass}>
                        <li onClick={() => this.selectedStatus('procesando')}><a href="#">procesando</a></li>
                        <li onClick={() => this.selectedStatus('creado')}><a href="#">creado</a></li>
                        <li onClick={() => this.selectedStatus('cancelado')}><a href="#">cancelado</a></li>
                        <li onClick={() => this.selectedStatus('completado')}><a href="#">completado</a></li>
                    </ul>
                </div>
            </div>
            <div className="container container-tabla">
                <table className="table table-hover">
                    <thead className="Head-tabla-orden-admin">
                        <tr>
                            <th>ID Orden</th>
                            <th>Status</th>
                            <th>Fecha</th>
                            <th>Importe</th>
                        </tr>
                    </thead>   
                    <tbody>
                    {
                        this.state.selectedOrders.length > 0 ? 
                        this.state.selectedOrders.map(orden => (
                            <tr className="profile_orden"  key={orden.id}>
                                <td>{orden.id}</td>
                                <td>{orden.status}</td>
                                <td>{orden.fecha}</td>
                                <td>{orden.importe}</td>    
                            </tr>
                        ))
                        :
                        this.state.ordenes.map(orden => (
                            <tr className="profile_orden"  key={orden.id}>
                                <td>{orden.id}</td>
                                <td>{orden.status}</td>
                                <td>{orden.fecha}</td>
                                <td>{orden.importe}</td>    
                            </tr>
                        ))
                    }
                    </tbody> 
                </table>
            </div>


        </div>
            
        )
    }
}

// function mapStateToProps (state) {
//     return {
//     }
// }
// function mapDispatchToProps (dispatch) {
//     return {
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(AdminOrdenes)

// <table className="table table-striped ">
//                     { 
//                         this.state.selectedOrders.length > 0 ? 
//                         this.state.selectedOrders.map(orden => (
//                             <tr className="profile_orden"  key={orden.id}>
//                                 <th>INFO DE LA ORDEN</th>
//                                 <th>ID Orden: {orden.id}</th>
//                                 <p>Status: {orden.status}</p>
//                                 <p>Fecha: {orden.fecha}</p>
//                                 <p>Import: {orden.importe}</p>    
//                                 <p>Email: {orden.email}</p> 
//                                 <p>ProductoXCantidad: {orden.productoXcantidad}</p> 
//                                 <p className="profile_celeste">Ver Detalle (OTRO COMPONENTE QUE MUESTRE TODOS LOS PRODUCTOS ordenDOS EN LA VENTA)</p>
//                                 <button className="btn btn-primary">Cambiar el Status</button>
//                             </tr>
//                         ))
//                         :
//                         this.state.ordenes.map(orden => (
//                             <div className="profile_orden"  key={orden.id}>
//                                 <p>INFO DE LA ORDEN</p>
//                                 <p>ID Orden: {orden.id}</p>
//                                 <p>Status: {orden.status}</p>
//                                 <p>Fecha: {orden.fecha}</p>
//                                 <p>Import: {orden.importe}</p>    
//                                 <p>Email: {orden.email}</p> 
//                                 <p>ProductoXCantidad: {orden.productoXcantidad}</p> 
//                                 <p className="profile_celeste">Ver Detalle (OTRO COMPONENTE QUE MUESTRE TODOS LOS PRODUCTOS ordenDOS EN LA VENTA)</p>
//                                 <button className="btn btn-primary">Cambiar el Status</button>
//                             </div>
//                         ))
//                     }

//                 </table>