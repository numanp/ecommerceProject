import React, { Component } from 'react';
import axios from 'axios';

export default class AdminOrdenes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ordenes: [],
            isOpen: false,
            selectedCarrito: [],
            selectedOrders: []
        }
        this.selectedStatus = this.selectedStatus.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/api/ventas')
        .then( res => this.setState({ ordenes: res.data }))
    }
    
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    selectedStatus = (status) => {
        if (status === 'todos') {
            this.setState({
                selectedOrders: this.state.ordenes,
                selectedOrderToEdit: []
            })
            return
        }
        var ordenesFiltradas = [];
        for (var i = 0; i < this.state.ordenes.length; i++) {
            if (this.state.ordenes[i].status == status) {
                ordenesFiltradas.push(this.state.ordenes[i]);
            }
        }
        this.setState({ selectedOrders: ordenesFiltradas })
    }

    handleSubmit(evento, ordenId) {
        axios.put(`/api/ventas/${ordenId}`, {status: evento.target.value})
        .then(location.reload())
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
                        <li onClick={() => this.selectedStatus('procesando')}><a href="#">PROCESANDO</a></li>
                        <li onClick={() => this.selectedStatus('creado')}><a href="#">CREADO</a></li>
                        <li onClick={() => this.selectedStatus('cancelado')}><a href="#">CANCELADO</a></li>
                        <li onClick={() => this.selectedStatus('completado')}><a href="#">COMPLETADO</a></li>
                        <li onClick={() => this.selectedStatus('todos')}><a href="#">TODOS</a></li>
                    </ul>
                    </div>

                    <form className="form-inline" onSubmit={this.props.handleSubmitID}>
                        <div className="form-group">
                            <label className="sr-only" >ID Orden</label>
                            <div className="input-group">
                            <input type="text" name="ID" className="form-control" placeholder="ID"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Ver más detalles de Orden por ID</button>
                    </form>

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
                                    <td>
                                        <select value={orden.status} onChange={(event) => this.handleSubmit(event, orden.id)}>
                                            <option value="procesando">Procesando</option>
                                            <option value="completado">Completado</option>
                                            <option value="creado">Creado</option>
                                            <option value="cancelado">Cancelado</option>
                                        </select>
                                    </td>
                                    <td>{orden.fecha}</td>
                                    <td>$ {orden.importe}</td>
                                </tr>
                            ))
                            :
                            this.state.ordenes.map(orden => (
                                <tr className="profile_orden"  key={orden.id}>
                                    <td>{orden.id}</td>
                                    <td>
                                        <select value={orden.status} onChange={(event) => this.handleSubmit(event, orden.id)}>
                                            <option value="procesando">Procesando</option>
                                            <option value="completado">Completado</option>
                                            <option value="creado">Creado</option>
                                            <option value="cancelado">Cancelado</option>
                                        </select>
                                    </td>
                                    <td>{orden.fecha}</td>
                                    <td>$ {orden.importe}</td>
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