import React ,{ Component } from 'react';

import { connect } from 'react-redux';


function mapStateToProps (state, ownProps){
    return {

    }
}

function mapDispatchToprops (dispatch, ownProps){
    return{

    }
}

class CarritoSlider extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <div className="wrapper-sidebar">
                    <nav id="sidebar-skeree">
                        <div className="sidebar-header">
                            <img src="./images/skereeteam.png" />
                        </div>
                    </nav>

                    <div id="content">
                        <nav className="navbar-sidebar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>        
            </div>
        )
    }
}

export default connect (mapStateToProps, mapDispatchToprops)(CarritoSlider)