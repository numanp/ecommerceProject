import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'


import WebStoreSlider from '../components/WebStoreSlider'
import ContenidoCelulares from '../components/ContenidoCelulares';
import ContenidoInformativo from '../components/ContenidoInformativo'
import GroupProducts from '../components/GroupProducts'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <WebStoreSlider />
                <GroupProducts />
                <ContenidoCelulares />
                <ContenidoInformativo />
                
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

//export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)



