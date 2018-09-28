import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserInfoForm.scss";

class UserInfoForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.getBalance();

    this.state = {
      loaded: false
    };
  }

  requestUpdate = e => {
    this.props.getBalance();
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.loaded) {
      console.log(this.props);
      this.setState(prev => (prev.loaded = true));
    }
  }

  render() {
    const { name, currentBalance } = this.props;

    return (
      <div className="profile col-md-3">
        <div className="profile-sidebar">
          <div className="profile-usertitle">
            <div className="profile-usertitle-name"> {name} </div>
            <div className="profile-usertitle-job">
              Current Balance: {currentBalance} PW
            </div>
          </div>
          <div className="profile-usermenu">
            <ul className="nav flex-column">
              <li>
                <Link to="/"> Transactions </Link>
              </li>
              <li>
                <Link to="/transfer"> Transfer PW </Link>
              </li>
              <li>
                <Link to="/templates"> Templates </Link>
              </li>
              <li>
                <button onClick={this.requestUpdate}>Request Update</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

UserInfoForm.propTypes = {
  name: PropTypes.string,
  currentBalance: PropTypes.number.isRequired,
  getBalance: PropTypes.func.isRequired
};

export default UserInfoForm;
