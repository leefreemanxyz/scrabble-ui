import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../actions/user/sign-in'
import { USER_SIGN_UP_PATH } from '../routes'

class SignIn extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      }
      this.props.signIn(user)
    }
  }

  validateAll() {
    return this.validateEmail() &&
      this.validatePassword()
  }

  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9.\_-]+@[a-z0-9.\_-]+\.[a-z0-9.\_-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.getValue() === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password, passwordConfirmation } = this.refs

    if (password.getValue().length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.getValue().match(/[a-zA-Z]+/) && password.getValue().match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }



  render() {
    return (
      <Paper style={{ padding: 48, width: 500, margin: '50px auto' }} zDepth={1}>
        <h1>SignIn</h1>

        <TextField fullWidth={true} ref="email" onChange={this.validateEmail.bind(this)} hintText="Your email address" errorText={this.state.emailError} />
        <TextField fullWidth={true} ref="password" type="password" onChange={this.validatePassword.bind(this)} hintText="Your password" errorText={this.state.passwordError} />

        <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
          <Link to={USER_SIGN_UP_PATH}>
            <RaisedButton
              label="Sign up"
              secondary={true}
              style={{ marginRight: '1rem'}} />
          </Link>

          <RaisedButton label="Sign In" primary={true} onClick={this.submitForm.bind(this)} />
        </div>
      </Paper>
    )
  }
}

export default connect(null, { signIn })(SignIn)
