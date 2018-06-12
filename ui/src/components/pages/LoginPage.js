import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
   //being used to send to login form to retrieve the input information (that way the form just behaves as a form). when submit button is pressed, this is called
   //calls the login function with data information (in auth)
   //if no errors and all goes well, redirect to homepage, if error.. caught in loginform (could be caught anywhere) 
   submit = data => 
      this.props.login(data).then(() => this.props.history.push("/"));

   render(){
      return(
         <div>
            <h1>Login Page</h1>

            <LoginForm submit={this.submit} />
         </div>
      );
   }
}

// proptypes define what needs to be sent
LoginPage.propTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }).isRequired,

   login: PropTypes.func.isRequired
};

//connect defines what needs to sent into component. first param specifies what to send from the redux state
export default connect(null, { login } )(LoginPage);