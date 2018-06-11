import React from 'react';
import PropTypes from "prop-types";
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
   state = {
      data: {},
      loading: false,
      errors: {}
   };

   onChange = e =>
      this.setState({
         //... adds to the front of data
         data: {...this.state.data, [e.target.name]: e.target.value}
      });

   onSubmit = () => {
      //validate returns errors, if no errors, it will be empty
      const errors = this.validate(this.state.data);
      this.setState({errors});

      //check if errors object is empty, Object.keys gets all keys of obj
      if(Object.keys(errors).length === 0){
         this.props.submit(this.state.data);
      }

   };

   validate = data => {
      const errors = {};

      //validator is class that check to see if emails are ok, data.email is in state
      if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
      //data.password in state
      if (!data.password) errors.password = "Can't be blank";

      return errors;
   };

   // need to get the state, validate data, and submit
   render() {
      //const controls the scope of these variables to just this render func
      const { data , errors } = this.state;

      return(
         /*form is part of symantic ui
         error={!!errors.email} is part of semanticui, turns boxes red

         */
         <Form onSubmit={this.onSubmit}>
            <Form.Field error={!!errors.email}>
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={data.email}
                  onChange={this.onChange}
               />
               {errors.email && <InlineError text={errors.email} />}
            </Form.Field>
            
            <Form.Field error={!!errors.email}>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter strong password"
                  value={data.password}
                  onChange={this.onChange}
               />
               {errors.password && <InlineError text={errors.password} />}
            </Form.Field>

            <Button primary>Login</Button>
         </Form>
      );
   }
}

LoginForm.propTypes = {
   submit: PropTypes.func.isRequired
};

export default LoginForm;