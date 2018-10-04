import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./auth.scss";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", username: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => (prevState[name] = value));
  };

  submitRegister = e => {
    const { handleRegister } = this.props;

    const { email, username, password } = this.state;
    if (email && password && username) {
      handleRegister(email, username, password);
    }

    e.preventDefault();
  };

  render() {
    return (
      <div className="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>Register</h2>
          </div>
          <form id="Register" onSubmit={this.submitRegister}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="User name"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <div className="panel">
            Already registered? Login <Link to="/">here</Link>
          </div>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired
};

export default RegisterForm;
