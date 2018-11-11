import React, { Component } from 'react'
import AdminOrdenes from '../components/AdminOrdenes'
import AdminSingleOrder from '../components/AdminSingleOrder'
import axios from 'axios';


export default class AdminOrdersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ordenes: [],
            isOpen: false,
            selectedCarrito: [],
            selectedOrders: []
        }
        // this.selectedStatus = this.selectedStatus.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitID = this.handleSubmitID.bind(this)
    }

    componentDidMount() {
        axios.get('/api/ventas')
        .then( res => this.setState({ ordenes: res.data }))
    }

    handleSubmitID (evento) {
        evento.preventDefault()
        let id = evento.target.ID.value

        axios.get(`/api/ventas/`)
        .then(res => res.data)
        .then(ordenesTotales => {
            var carrito = []
            for (var i = 0; i < ordenesTotales.length; i++) {
                if (ordenesTotales[i].id == id) {
                    carrito.push(JSON.parse(ordenesTotales[i].carro));
                }
            }
            this.setState({ selectedCarrito: carrito[0] })
        })
    }
    
    render() {
        return (
            <div>
            {
                this.state.selectedCarrito.length > 0 ?
                <AdminSingleOrder ordenes={this.state.ordenes} carrito={this.state.selectedCarrito}/>
                :
                <AdminOrdenes handleSubmitID={this.handleSubmitID}/>
            }
            </div>
        )
    }
}
