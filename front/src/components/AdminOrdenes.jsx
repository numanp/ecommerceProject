import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router'

export default class AdminOrdenes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ordenes: [],
            isOpen: false,
            // selectedStatus: '',
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
        if (status === 'todos') {
            this.setState({
                selectedOrders: this.state.ordenes
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
    handleClick(e) {
        console.log(e)
        this.router.transitionTo('http://www.google.com')
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
            </div>
            <div className="container container-tabla">
                <table className="table table-hover">
                    <thead className="Head-tabla-orden-admin">
                        <tr>
                            <th>ID Orden</th>
                            <th>Status</th>
                            <th>Fecha</th>
                            <th>Importe</th>
                            <th>Editar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>   
                    <tbody>
                    {
                        this.state.selectedOrders.length > 0 ? 
                        this.state.selectedOrders.map(orden => (
                            <tr className="profile_orden"  key={orden.id}>
                                <td>{orden.id}</td>
                                <td>{orden.status}</td>
                                <td><button>Edit status</button></td>
                                <td>{orden.fecha}</td>
                                <td>$ {orden.importe}</td>
                                <td onClick={this.handleClick.bind(this)}><button>Detalles</button></td>
                            </tr>
                        ))
                        :
                        this.state.ordenes.map(orden => (
                            <tr className="profile_orden"  key={orden.id}>
                                <td>{orden.id}</td>
                                <td>{orden.status}</td>
                                <td><button>Edit status</button></td>
                                <td>{orden.fecha}</td>
                                <td>$ {orden.importe}</td>
                                <td onClick={this.handleClick.bind(this)}><button>Detalles</button></td>
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