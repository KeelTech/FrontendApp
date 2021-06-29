import React from 'react';
import { connect } from 'react-redux';
import { resetAuth } from '../actions/index.js'
import STORAGE from '../helpers/storage'

class LeftMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:''
		}
	}

	handleCloseClick() {
		this.props.compClick();
	}

	logout() {
		this.props.resetAuth();
		this.props.history.push('/')
	}
	
	getInitials(fullName) {
        return fullName.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
	}

	render() {
		const fullName = this.props.user.userObj.firstName ? (this.props.user.userObj.firstName +" "+ (this.props.user.userObj.lastName ? this.props.user.userObj.lastName : "")) : "";
		const mobileNo = this.props.user.userObj.mobile ? this.props.user.userObj.mobile : "";
		const initials = this.getInitials(fullName);

		return (
            	<div className={"health-id-dashboard-navigation "+this.props.classprop}>
                    <div onClick={this.handleCloseClick.bind(this)} className="close hide-desktop">
                    	<img src={ASSETS_BASE_URL+"/images/icon-cross.svg"} alt="DocprimeNDHM" />
                    </div>
                    <div className="logo">
                    	<a href="/"><img src={ASSETS_BASE_URL+"/images/doc-prime-logo-mobile.svg"} alt="DocprimeNDHM" /></a>
                    </div>
                    <div className="health-id-details">
						<div className="health-id-details-initials">
							<p>{initials}</p>
						</div>
						<div className="name-number">
							<p className="name">{fullName}</p>
							<p className="number">{mobileNo } </p>
							<a>Edit Profile</a>
						</div>
                    </div>
                    <ul className="navigation">
						<li><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-kyc-verification.svg"} alt="DocprimeDHM" /><a href="/"> Dashboard</a></li>
						<li className="disabled">
							<img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-dashboard-active.svg"} alt="DocprimeDHM" className="active" />
							<img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-dashboard.svg"} alt="DocprimeDHM" className="not-active" />Your Health IDs
						</li>
						<li className="disabled"><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-kyc-verification.svg"} alt="DocprimeDHM" />KYC Verification</li>
						<li className="disabled"><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-health-docs.svg"} alt="DocprimeDHM" />Health Docs</li>
						<li className="disabled"><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-permissions.svg"} alt="DocprimeDHM" />Permissions</li>
						<li><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-help.svg"} alt="DocprimeDHM" />Need Help</li>
						<li onClick={this.logout.bind(this)}><img src={ASSETS_BASE_URL+"/images/navigation/nav-icon-logout.svg"} alt="DocprimeDHM" />Logout</li>
                    </ul>
                </div>
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
		resetAuth: () => dispatch(resetAuth()),		
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
