import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Navigation extends Component {
  constructor(props) {
    super(props);

  }

    render() {

      const dynamicLink = (route, linkText) => {
        return (
          <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>
            </div>
        );
      };

      const handleSignOut = () => {
        axios.post("https://kaitlyn-backend.herokuapp.com/rest-auth/logout/")
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            this.props.history.push("/");
            this.props.handleLogout();
          }
          return response.data;
        }).catch(error => {
          console.log("Error signing out", error)
        });
      };
          
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                  <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                  </NavLink>
                </div>
      
                <div className="nav-link-wrapper">
                  <NavLink to="/about" activeClassName="nav-link-active">
                    About
                  </NavLink>
                </div>

                <div className="nav-link-wrapper">
                  <NavLink to="/members" activeClassName="nav-link-active">
                    Members
                  </NavLink>
                </div>

                {this.props.loggedInStatus === "login" ? dynamicLink("/blog", "Blog") : null}
      
                <div className="nav-link-wrapper">
                  <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                  </NavLink>
                </div>

                <div className="nav-link-wrapper">
                  <NavLink to="/login" activeClassName="nav-link-active">
                    {/* Login <FontAwesomeIcon icon="sign-in-alt" /> */}
                    {this.props.loggedInStatus === "login" ? (<a onClick={handleSignOut}>Logout <FontAwesomeIcon icon="sign-out-alt" /></a>) : <a> Login <FontAwesomeIcon icon="sign-in-alt" /> </a>}
                  </NavLink>
                </div>
                
                
              </div>
          );
    }
}
    
export default withRouter(Navigation);