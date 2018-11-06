import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarritoItems from '../components/CarritoItems';
import * as cartActions from '../redux/action-creators/cart';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        cart: state.cart,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(cartActions, dispatch)
}

class Carrito extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props.user)
    }

    render() {
        // {console.log(this.state.cartItems)}
        return (
            <div>
                <h2> My Cart </h2>
                <div className="row">
                    {
                        this.props.cart.map(item =>
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

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)