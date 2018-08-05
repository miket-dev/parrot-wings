import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userService from "../../../services/userService";
import "./UserInfoForm.scss";

const UserInfoForm = props => {
  const { name } = userService.currentUser();
  //eslint-disable-next-line react/prop-types
  const { currentBalance } = props;

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

const mapStateToProps = state => ({
  currentBalance: state.get("currentBalance")
});

const connectedUserInfo = connect(mapStateToProps)(UserInfoForm);

export { connectedUserInfo as UserInfoForm };
