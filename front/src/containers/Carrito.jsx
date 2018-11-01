import React, { Component } from 'react';
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

// function Carrito(props) {
//     return <div>
//                 <h2> My Cart </h2>
//                 <div> {console.log(props.cart)}</div>
//             </div>
// }

// import React, { Component } from 'react'

class Carrito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carrito: this.props.cart
        }
    }
  render() {
    return (
        <div>
            <h2> My Cart </h2>
            <div> {console.log(this.props.cart)}</div>
         </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addToCart: (item) => {
//             dispatch({ type: 'ADD', payload: item })
//         },
//         removeFromCart: (item) => {
//             dispatch({ type: 'REMOVE', payload: item })
//         }
//     }
// }

export default connect(mapStateToProps,null)(Carrito)