import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./userInfo.scss";

class UserInfo extends React.Component {
  componentDidMount() {
    const { currentBalance, userId, requestBalance } = this.props;

    if (currentBalance == null) {
      requestBalance(userId);
    }
  }

  render() {
    const { currentBalance, username } = this.props;

    return (
      <div className="profile col-md-3">
        <div className="profile-sidebar">
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">{username}</div>
            <div className="profile-usertitle-job">
              Current Balance: {currentBalance} PW
            </div>
          </div>
          <div className="profile-usermenu">
            <ul className="nav flex-column">
              <li>
                <Link to="/">Transactions</Link>
              </li>
              <li>
                <Link to="/transfer">Transfer PW</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  currentBalance: PropTypes.number,
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  requestBalance: PropTypes.func.isRequired
};

export default UserInfo;
