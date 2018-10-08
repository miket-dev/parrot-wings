import React from "react";
import PropTypes from "prop-types";
import AutocompleteSelect from "../../controls/autocompleteSelect";
import ErrorComponent from "../../utils/ErrorComponent";

class TransferStep1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userId: null, amount: null, errorString: null };
  }

  handleSubmit = e => {
    let { userId, amount } = e.target;
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

  componentDidMount() {
    const { users, userRequest, userId } = this.props;
    if (!users || (users && users.length == 0)) {
      userRequest(userId);
    }
  }

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
        {errorString && <ErrorComponent error={errorString} />}
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
  userId: PropTypes.number.isRequired,
  userRequest: PropTypes.func.isRequired,
  preSelectedUserId: PropTypes.number,
  preSelectedAmount: PropTypes.number,
  currentBalance: PropTypes.number,
  onSubmit: PropTypes.func.isRequired
};

export default TransferStep1;
