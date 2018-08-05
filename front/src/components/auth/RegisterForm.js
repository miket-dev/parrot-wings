import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import appActions from "../../actions/appActions";
import "./AuthForm.scss";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", name: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => (prevState[name] = value));
  };

  handleRegister = e => {
    //eslint-disable-next-line
    const { dispatch } = this.props;

    const { email, name, password } = this.state;
    if (email && password && name) {
      dispatch(appActions.register(name, email, password));
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
          <form id="Register" onSubmit={this.handleRegister}>
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
                name="name"
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

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn")
});

const connectedAuthForm = connect(mapStateToProps)(RegisterForm);

export { connectedAuthForm as RegisterForm };
