import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserInfoForm.scss";

const UserInfoForm = props => {
  const { name, currentBalance } = props;

  return (
    <div className="profile col-md-3">
      <div className="profile-sidebar">
        <div className="profile-usertitle">
          <div className="profile-usertitle-name">{name}</div>
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
};

UserInfoForm.propTypes = {
  name: PropTypes.string.isRequired,
  currentBalance: PropTypes.number.isRequired
};

export default UserInfoForm;
