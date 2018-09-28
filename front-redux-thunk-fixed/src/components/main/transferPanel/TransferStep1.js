import React from "react";
import PropTypes from "prop-types";
import ErrorContainer from "../../../containers/error/ErrorContainer";
import AutocompleteSelect from "../../controls/autocompleteSelect";

class TransferStep1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userId: null, amount: null, errorString: null };
  }

  handleSubmit = e => {
    let [userId, amount] = [e.target.userId.value, e.target.amount.value];
    const { currentBalance, onSubmit } = this.props;
    if (amount > currentBalance) {
      this.setState(
        prevState =>
          (prevState.errorString =
            "Amount has to be lower than current user balance")
      );
    } else if (amount <= 0) {
      this.setState(
        prevState => (prevState.errorString = "Amount has to be greater than 0")
      );
    } else if (!userId || isNaN(Number(userId))) {
      this.setState(prevState => (prevState.errorString = "Select the user"));
    } else {
      this.setState(prevState => {
        prevState.userId = Number(userId);
        prevState.amount = Number(amount);
        prevState.errorString = null;
        return prevState;
      });

      onSubmit({ userId, amount });
    }

    e.preventDefault();
  };

  render() {
    const { users, preSelectedUserId, preSelectedAmount } = this.props;
    const { errorString } = this.state;

    let userSearchItem =
      users.length > 0 ? (
        <div className="form-group">
          <label htmlFor="userId">User:</label>
          <AutocompleteSelect
            name="userId"
            dataSource={users}
            value={preSelectedUserId || null}
          />
        </div>
      ) : (
        <div className="form-group">Loading...</div>
      );

    let disabled = users.length === 0;

    return (
      <div>
        {errorString && <ErrorContainer message={errorString} />}
        <form onSubmit={this.handleSubmit}>
          {userSearchItem}
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              className="form-control"
              defaultValue={preSelectedAmount || 0}
            />
          </div>
          <input
            type="submit"
            value="Next"
            className="btn btn-default"
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

TransferStep1.propTypes = {
  users: PropTypes.array,
  preSelectedUserId: PropTypes.number,
  preSelectedAmount: PropTypes.number,
  currentBalance: PropTypes.number,
  onSubmit: PropTypes.func.isRequired
};

export default TransferStep1;
