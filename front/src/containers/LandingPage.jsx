import React, { Component } from 'react'
import { connect } from 'react-redux'

import WebStoreSlider from '../components/WebStoreSlider'
import ContenidoCelulares from '../components/ContenidoCelulares';
import ContenidoInformativo from '../components/ContenidoInformativo'
import GroupProducts from '../components/GroupProducts'

function mapStateToProps(state) {
    return {
        product: state.products.product,
        productos: state.products.products,
    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}

class LandingPage extends Component {
    constructor(props) {
        super(props);
        console.log('props', props)
    }
    
    // componentDidMount() {
    //     this.props.getProducts()
    // }

    render() {
        return (
            <div>
                <WebStoreSlider />
                <GroupProducts productos={this.props.productos}/>
                <ContenidoCelulares />
                <ContenidoInformativo />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)



