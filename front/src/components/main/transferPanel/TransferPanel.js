import React from "react";
import PropTypes from "prop-types";
import appActions from "../../../actions/appActions";
import { connect } from "react-redux";
import { TransferStep1 } from "./TransferStep1";
import { TransferStep2 } from "./TransferStep2";
import { TransferStep3 } from "./TransferStep3";
import "./TransferPanel.scss";

class TransferPanel extends React.Component {
  constructor(props) {
    super(props);

    //eslint-disable-next-line
    const { dispatch } = props;
    dispatch(appActions.getUsers());
    dispatch(appActions.restoreTransferred());

    this.state = {
      userId: null,
      amount: null,
      verified: false,
      sent: false,
      stepIndex: 0,
      errorString: null
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

  render() {
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
        form = (
          <TransferStep1
            preSelectedUserId={preSelectedUserId}
            preSelectedAmount={preSelectedAmount}
            onSubmit={this.handleSubmit}
          />
        );
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
          {form}
        </div>
      </div>
    );
  }
}

TransferPanel.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  errorMessage: state.get("errorMessage")
});

const connectedPanel = connect(mapStateToProps)(TransferPanel);

export { connectedPanel as TransferPanel };
