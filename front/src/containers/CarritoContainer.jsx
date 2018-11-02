import React, { Component } from 'react';
import { connect } from 'react-redux'
import CarritoItems from '../components/CarritoItems'

function mapStateToProps(state) {
    return {
        cart: state.cart
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

class Carrito extends Component {
    constructor(props) {
        super(props)
            // this.state = {
            //     cart: this.props.cart
            // }
    }
    render() {
        {console.log('props',this.props)}
        return (
            <div>
                <h2> My Cart </h2>
                <div className="row">
                    {
                        this.props.cart.map( item => 
                            <CarritoItems 
                                product={item}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Carrito)