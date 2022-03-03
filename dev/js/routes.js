import React, { Component } from 'react';
//import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import CONFIG from './config';
import CustomRoute from './CustomRoute.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const queryString = require('query-string');
import UserLoginView from './pages/UserLoginView';
import UserDashboardView from './pages/UserDashboardView';
import UserSignUpView from './pages/UserSignUpView';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import TaskDetailMobileEntry from './pages/TaskDetail/TaskDetailMobileEntry.js';
import PasswordReset from './pages/PasswordReset';
import EmailVerification from './pages/UserLoginView/EmailConfirmation';
import AgentDashBoardView from './pages/AgentViews';
import HomePageView from './HomePageView.js';
import NotFoundPage from './pages/NotFoundPage';
import CustomChat from './components/CustomChatWidget';
import SOSLogin from  './components/SOSLogin';
// const CustomChat = Loadable({
//   loader: () => import('./components/CustomChatWidget'),
//   loading: <p></p>,
// });

let CUSTOMER_ROUTES = [
  { path: '/', exact: true, component: HomePageView },
  { path: '/dashboard', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/login', exact: true, component: UserLoginView, isSignin: true },
  { path: '/signup', exact: true, component: UserSignUpView, isSignin: true },
  { path: '/reset-password', exact: true, component: PasswordReset, isSignin: true },
  { path: '/confirm-email', exact: true, component: EmailVerification, isSignin: true },
  { path: '/linkedin', exact: true, component: LinkedInPopUp, isSignin: true },
  { path: '/task/detail/:id', exact: true, component: TaskDetailMobileEntry, isPrivate: true },
  { path: '/tasks', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/vault', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/billing', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/profile', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/create', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/edit/:id', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/notification', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/plan/detail/:id', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/application', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/chat', exact: true, component: CustomChat, isPrivate: false },
  { path: '/userLogin/:emailId', exact: true, component: SOSLogin, isPrivate: false },
  { path: '*', component: NotFoundPage, isPrivate: false  },
];

let AGENT_ROUTES = [
  { path: '/', exact: true, component: AgentDashBoardView },
  { path: '/agent', component: AgentDashBoardView, isPrivate: true  },
  { path: '/chat', exact: true, component: CustomChat, isPrivate: false},
  { path: '/userLogin/:emailId', exact: true, component: SOSLogin, isPrivate: false },
  { path: '*', component: NotFoundPage, isPrivate: false  },
]

let LOGIN_ROUTES = [
  { path: '/', exact: true, component: HomePageView },
  { path: '/agent/login', exact: true, component: UserLoginView, isSignin: true },
  { path: '/login', exact: true, component: UserLoginView, isSignin: true },
  { path: '/signup', exact: true, component: UserSignUpView, isSignin: true },
  { path: '/reset-password', exact: true, component: PasswordReset, isSignin: true },
  { path: '/confirm-email', exact: true, component: EmailVerification, isSignin: true },
  { path: '/linkedin', exact: true, component: LinkedInPopUp, isSignin: true },
  { path: '/agent/reset-password', exact: true, component: PasswordReset, isSignin: true },
  { path: '/agent/confirm-email', exact: true, component: EmailVerification, isSignin: true },
  { path: '/userLogin/:emailId', exact: true, component: SOSLogin, isPrivate: false },
  { path: '/chat', exact: true, component: CustomChat, isPrivate: false },
  { path: '*', component: NotFoundPage, isPrivate: false  },
]

// routes.push({ path: '*', component: NotFound, NO_MATCH: true })

class RouterConfig extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentRoute: this.getRoutes(props)
    }
  }
  //static ROUTES = routes;

  componentDidMount(){
    const route = this.getRoutes(this.props);
    this.setState({
      currentRoute: route
    })
  }

  getRoutes(props){
    if(!props.IsloggedIn){
      return LOGIN_ROUTES
    }else if(props.isAgent){
      return AGENT_ROUTES
    }else {
      return CUSTOMER_ROUTES
    }
  }

  componentDidUpdate(prevProps){
    if(!this.props.IsloggedIn && prevProps.IsloggedIn!==this.props.IsloggedIn){
      this.setState({
        currentRoute: LOGIN_ROUTES
      })
      return;
    }
    if((prevProps.isAgent!==this.props.isAgent) || (this.props.IsloggedIn && prevProps.IsloggedIn!==this.props.IsloggedIn)){
      this.setState({
        currentRoute: this.props.isAgent?AGENT_ROUTES:CUSTOMER_ROUTES
      })
    }
  }

  render() {
    const { currentRoute } = this.state;
    
    return (
      <Switch location={location}>
        {currentRoute.map((route, i) => (
          <CustomRoute {...route} key={i} />
        ))}
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({ 
  isAgent: state.LOGIN.isAgent,
  IsloggedIn: state.LOGIN.IsloggedIn
})



export default connect(mapStateToProps)(RouterConfig);
