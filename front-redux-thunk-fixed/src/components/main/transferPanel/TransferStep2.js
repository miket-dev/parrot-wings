import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TransferStep2 extends React.Component {
  handleBack = () => {
    const [onBack] = this.props;
    onBack();
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    onSubmit();
    e.preventDefault();
  };

  render() {
    const { users, userId, amount } = this.props;

    let username = users.filter(x => x.id === userId)[0].name;

    return (
      <div>
        <div className="alert alert-light" role="alert">
          Step 1: To: {username}; Amount: {amount} PW
        </div>
        <form onSubmit={this.handleSubmit}>
          <h3>Verify the transaction information</h3>
          <div className="form-group row">
            <label className="col-md-2">To:</label> {username}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Amount:</label> {amount}
          </div>
          <input
            type="button"
            value="Back"
            className="btn btn-default"
            onClick={this.handleBack}
            style={{ marginRight: "10px" }}
          />
          <input type="submit" value="Verify" className="btn btn-default" />
        </form>
      </div>
    );
  }
}

TransferStep2.propTypes = {
  users: PropTypes.array,
  userId: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.get("users")
  };
};

const connectedStep2 = connect(mapStateToProps)(TransferStep2);

export { connectedStep2 as TransferStep2 };
