import React from 'react';
import { connect } from 'react-redux';
import {  getProfile } from '../actions/index.js'
import STORAGE from '../helpers/storage'
import LeftMenu from './LeftMenu.js'
import UTILS from '../utils/commonUtils.js';


class UserDashboardView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            user:'',
            empty:false,
            profile: '',
            showCreateForm:false,
            leftShow: false,
            detailsId:'',
            phoneNumber: STORAGE.getPhoneNumber()
		}
	}


	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0)
        }
        

        this.props.getProfile((err, data) => {})
    }




    handleMenuToggle() {
        if(this.state.leftShow){
            this.setState({ leftShow: false })
        }
        else{
            this.setState({ leftShow: true })
        } 
    }


	render() {
		// if(!STORAGE.checkAuth() || !STORAGE.checkNumber()){
		// 	this.props.history.push('/')
        // }
        
		const fullName = this.props.user.userObj.firstName ? (this.props.user.userObj.firstName +" "+ (this.props.user.userObj.lastName ? this.props.user.userObj.lastName : "")) : "";

		return (
                <section className="health-id-dashboard">
                    <LeftMenu compClick={this.handleMenuToggle.bind(this)} {...this.props} classprop='hide-mobile' />
                    {this.state.leftShow ?  <LeftMenu compClick={this.handleMenuToggle.bind(this)} {...this.props} classprop='hide-desktop' /> : "" }
                    <div className="health-id-dashboard-right">

                        {/* Top MENU */}
                        <div className="hide-desktop logo-menu">
                            <div onClick={this.handleMenuToggle.bind(this)} className="menu">
                                <img src={ASSETS_BASE_URL+"/images/icon-menu.svg"} alt="DocprimeDHM" />
                            </div>
                            <a href="/">
                                <img src={ASSETS_BASE_URL+"/images/doc-prime-logo-mobile.svg"} alt="DocprimeDHM" />
                            </a>
                        </div>

                        
                
                        
                         {/* Empty Dashboard */}
                        {this.state.empty ? <div className="create-new-health-id">
                            <img src={ASSETS_BASE_URL+"/images/health-sorry-graphic-mobile.svg"} alt="Keel" />
                          <h2>Sorry <img src={ASSETS_BASE_URL+"/images/icon-sad.svg"} alt="Keel" /></h2>
                          <p>You don’t have any health id. You can create a new health id for your health records.</p>
                          <button onClick={this.handleCreateHealthId.bind(this)} className="dashed-button" id="create-new-health-id"><img src={ASSETS_BASE_URL+"/images/icon-id.svg"} alt="DocprimeDHM" /> 
                              Create New Health ID
                          </button>
                        </div> : ""
                        }
                        {/* Dashboard End */}

                        
                    </div>
                </section>
		);
	}
}

const mapStateToProps = (state) => {

    let user = state.USER
    return {
        user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (cb) => dispatch(getProfile(cb)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardView);
