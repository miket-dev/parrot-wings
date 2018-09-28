import React from "react";
import PropTypes from "prop-types";
import TransferStep1 from "./TransferStep1";
import { TransferStep2 } from "./TransferStep2";
import { TransferStep3 } from "./TransferStep3";
import ErrorContainer from "../../../containers/error/ErrorContainer";
import "./TransferPanel.scss";

class TransferPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      amount: null,
      verified: false,
      sent: false,
      stepIndex: 0,
      errorString: null,
      loaded: false
    };
  }

  handleBack = () => {
    const prevStep = this.state.stepIndex - 1;

    this.setState(prevState => (prevState.stepIndex = prevStep));
  };

  handleSubmit = e => {
    const { stepIndex } = this.state;

    switch (stepIndex) {
      case 0: {
        let { userId, amount } = e;

        this.setState(prevState => {
          prevState.stepIndex = 1;
          prevState.userId = Number(userId);
          prevState.amount = Number(amount);
          prevState.errorString = null;
          return prevState;
        });

        break;
      }
      case 1: {
        this.setState(prevState => {
          prevState.stepIndex = 2;
          prevState.verified = true;
          return prevState;
        });
        break;
      }
      case 2: {
        break;
      }
    }
  };

  componentDidMount() {
    let { getUsers, restoreTransferred } = this.props;
    restoreTransferred();
    getUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.loaded && this.props.users.length > 0) {
      this.setState(prevState => (prevState.loaded = true));
    }
  }

  render() {
    const { users, errorMessage } = this.props;
    const { userId, amount, stepIndex } = this.state;
    let preSelectedUserId = null;
    let preSelectedAmount = null;
    //eslint-disable-next-line
    if (this.props.location.state) {
      preSelectedUserId = this.props.location.state.preSelectedUserId; //eslint-disable-line
      preSelectedAmount = this.props.location.state.preSelectedAmount; //eslint-disable-line
    }

    let form;
    switch (stepIndex) {
      case 0: {
        if (users) {
          form = (
            <TransferStep1
              users={users}
              preSelectedUserId={preSelectedUserId}
              preSelectedAmount={preSelectedAmount}
              onSubmit={this.handleSubmit}
            />
          );
        }
        break;
      }
      case 1: {
        form = (
          <TransferStep2
            userId={userId}
            amount={amount}
            onSubmit={this.handleSubmit}
            onBack={this.handleBack}
          />
        );
        break;
      }
      case 2: {
        form = (
          <TransferStep3
            userId={userId}
            amount={amount}
            onSubmit={this.handleSubmit}
          />
        );
        break;
      }
    }

    return (
      <div className="col-md-9">
        <div className="profile-content">
          <h2>Transfer Parrot Wings</h2>
          {errorMessage && <ErrorContainer message={errorMessage.toString()} />}
          {form}
        </div>
      </div>
    );
  }
}

TransferPanel.propTypes = {
  getUsers: PropTypes.func.isRequired,
  restoreTransferred: PropTypes.func.isRequired,
  users: PropTypes.array,
  errorMessage: PropTypes.any
};

export default TransferPanel;
