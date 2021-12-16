import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Icons from "./icons";
import NoMatch from './noMatch';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Members from './members';
import Blog from './blog';
import BlogDetail from './blogDetail';
import Contact from './contact';
import Login from './login';
import Footer from './footer';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "logout"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    Icons();
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "login"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "logout"
    })
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "logout"
    })
  }

  checkLoginStatus() {
    fetch("https://kaitlyn-backend.herokuapp.com/rest-auth/login/").then(response => {
      console.log("logged_in return", response);
      const loggedIn = response.statusText;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "login") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "logout") {
        this.setState({
          loggedInStatus: "login"
        });
      } else if (!loggedIn && loggedInStatus === "login") {
        this.setState({
          loggedInStatus: "logout"
        });
      }
    })
    .catch(error => {
      console.log("Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route exact path="/blog" component={Blog} />
    ]
  }

  render() {
    return (
      <div className='app'>
        <Router>
            <Navigation 
            loggedInStatus={this.state.loggedInStatus}
            handleLogout={this.handleLogout} />
            {/* <h2>{this.state.loggedInStatus}</h2> */}

            <Switch {...this.props}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/members" component={Members} />
              {this.state.loggedInStatus === "login" ? this.authorizedPages() : null}
              <Route exact path="/blog/:slug" component={BlogDetail} />
              <Route exact path="/contact" component={Contact} />

              <Route exact path="/login" render={props => (
                <Login
                  {...props}
                  handleSuccessfulLogin ={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin ={this.handleUnSuccessfulLogin}
                  />
              )}
            />

              <Route component={NoMatch} />
            </Switch>

            <Footer />
        </Router>
      </div>
    );
  }
}

// mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   }
// }

export default connect(null)(App);
