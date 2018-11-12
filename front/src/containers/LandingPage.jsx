import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../redux/action-creators/products';

import WebStoreSlider from '../components/WebStoreSlider'
import ContenidoCelulares from '../components/ContenidoCelulares';
import ContenidoInformativo from '../components/ContenidoInformativo'


function mapStateToProps(state) {
    return {
        product: state.products.product,
        productos: state.products.products,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => {
            dispatch(getProducts())
        }
    }
}

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        return (
            <div>
                <WebStoreSlider />
                <ContenidoCelulares />
                <ContenidoInformativo />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)



