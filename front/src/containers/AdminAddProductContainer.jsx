
import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct'

//COMPONENTES
import AdminComponent from '../components/AdminComponent';

class AdminContainer extends Component {
    constructor() {
        super();
        this.state = {
            nombreProducto: '',
            precioProducto: '',
            imgProducto: '',
            stockProducto: '',
            catProducto: '',
            descripcionProducto: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    handleInputChange(event) {
       /* const target = event.target.name;
        const value = event.target.value;
        
        console.log("TARGET: " + target)
        console.log(value)
        
        this.setState({
            target: value
        });
        console.log(this.state)
        */
    }

    handleSubmit(evt){
        evt.preventDefault();
        console.log(this.state)
        const nombreProducto = event.target.nombreProducto.value;
        const precioProducto=  event.target.precioProducto.value;
        const imgProducto=  event.target.imgProducto.value;
        const stockProducto=  event.target.stockProducto.value;
        const catProducto= 'CATEGORIA1';
        const descripcionProducto= event.target.descripcionProducto.value;

        this.setState({
            nombreProducto: nombreProducto,
            precioProducto: nombreProducto,
            imgProducto: imgProducto,
            stockProducto: stockProducto,
            catProducto: catProducto,
            descripcionProducto: descripcionProducto,

        });
       
    }
    render() {
        return (
            <div>
                <AdminAddProduct handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
            </div>   
        )
    }
}
export default AdminContainer;