import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import transferredValues from "../../../constants/transferredValues";
import ErrorComponent from "../../utils/ErrorComponent";

class TransferStep3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    onSubmit();
    e.preventDefault();
  };

  saveAsTemplate = () => {
    this.setState(prevState => (prevState.redirect = true));
  };

  //   componentDidMount() {
  //     const { userId, amount, dispatch } = this.props;
  //   }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/templates" />;
    }

    const { users, userId, amount, transferred, error } = this.props;

    let username = users.filter(x => x.id === userId)[0].name;

    return (
      <div>
        {error && <ErrorComponent error={error.toString()} />}
        <div className="alert alert-light" role="alert">
          Step 1: To: {username}; Amount: {amount} PW
        </div>
        <div className="alert alert-light" role="alert">
          Step 2: Verified: yes
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-md-2">Sent:</label>{" "}
            {transferred === transferredValues.NOT_STARTED
              ? "processing"
              : transferred === transferredValues.SUCCESS
                ? "yes"
                : "no, see error above"}
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.saveAsTemplate}
              disabled={transferred !== transferredValues.SUCCESS}
            >
              Save as template
            </button>
          </div>
        </form>
      </div>
    );
  }
}

TransferStep3.propTypes = {
  users: PropTypes.array,
  userId: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  transferred: PropTypes.number.isRequired,
  error: PropTypes.any
};

export default TransferStep3;
