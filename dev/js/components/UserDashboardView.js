import React from 'react';
import { connect } from 'react-redux';
import { getHealthIdsList, getProfile } from '../actions/index.js'
import STORAGE from '../helpers/storage'
import LeftMenu from './LeftMenu.js'
import HealthItemListView from './HealthIdListItemView.js'
import CreateHealthIdFormView from './CreateHealthIdFormView.js'
import UTILS from '../utils/commonUtils.js';


class UserDashboardView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            user:'',
            empty:false,
            healthData: '',
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
        this.props.getHealthIdsList(this.state.phoneNumber, (err, data) => {
            if (!err &&  data && (Object.keys(data.data).length > 0)) {
                this.setState({ healthData: data.data, empty:false })
            }
            else{
                this.setState({empty:true})
            } 
        })

        this.props.getProfile((err, data) => {})
    }

    showDetailsCard = (value) => {
        if(value){
            var encryptedAES = UTILS.getEncryptedData(value);
            let url = '/healthid/details/'+encryptedAES;
            this.props.history.push(url)
        }
    }

    handleCreateHealthId() {
        if(this.state.showCreateForm){
            this.setState({ showCreateForm: false })
        }
        else{
            this.setState({ showCreateForm: true })
        }
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

                        
                        {/* Dashboard Start*/}
                        {this.state.healthData && Object.keys(this.state.healthData).length > 0 ? 
                            <div className="customer-health-ids-container">
                            <h2>{`Hey ${fullName}`}</h2>
                            <p>Welcome Back.</p>
                            <div className="customer-health-ids">
                                <p>Your Existing Health IDs</p>
                                <div className="customer-health-ids-list">
                                     {this.state.healthData.map((hid, index) => {return <HealthItemListView {...this.props} compClick={this.showDetailsCard} data={hid} key={index} /> } )}
                                </div>
                                <div className="create-new-health-id-family">
                                <img src={ASSETS_BASE_URL+"/images/create-new-health-id-family-image.svg"} alt="DocprimeDhm" />
                                <p>You can also create a health id for your family member</p>
                                <button  onClick={this.handleCreateHealthId.bind(this)} className="primary-button" id="create-new-health-id-family"><img src={ASSETS_BASE_URL+"/images/icon-id-white.svg"} alt="DocprimeDHM" /> Create New Health ID</button>
                                </div>
                            </div>
                        </div> : ""}

                        
                         {/* Empty Dashboard */}
                        {this.state.empty ? <div className="create-new-health-id">
                            <img src={ASSETS_BASE_URL+"/images/health-sorry-graphic-mobile.svg"} alt="DocprimeDHM" />
                          <h2>Sorry <img src={ASSETS_BASE_URL+"/images/icon-sad.svg"} alt="DocprimeDHM" /></h2>
                          <p>You don’t have any health id. You can create a new health id for your health records.</p>
                          <button onClick={this.handleCreateHealthId.bind(this)} className="dashed-button" id="create-new-health-id"><img src={ASSETS_BASE_URL+"/images/icon-id.svg"} alt="DocprimeDHM" /> 
                              Create New Health ID
                          </button>
                        </div> : ""
                        }
                        {/* Dashboard End */}

                        
                        {/* HealthId Create PopUp */}
                        {this.state.showCreateForm ?  <CreateHealthIdFormView {...this.props} compClose={this.handleCreateHealthId.bind(this)} /> : "" }

                        {/* HealthId Details PopUp */}
                        {/* {this.state.showDetailsPopUp ?  <HealthCardView {...this.props} hid={this.state.detailsId} compClose={this.closeDetailsCard.bind(this)} /> : "" } */}
                        
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
        getHealthIdsList: (number, cb) => dispatch(getHealthIdsList(number, cb)),
        getProfile: (cb) => dispatch(getProfile(cb)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardView);
