import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import transferredValues from "../../../constants/transferredValues";
import ErrorComponent from "../../utils/ErrorComponent";
import Redirect from "react-router-dom/Redirect";

class TransferStep3 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { templateSaved: false };
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    onSubmit();
    e.preventDefault();
  };

  saveAsTemplate = () => {
    const { saveTemplate, userId, amount } = this.props;

    saveTemplate(userId, amount);

    this.setState(prevState => (prevState.templateSaved = true));
  };

  componentDidMount() {
    const { userId, amount, initTransfer } = this.props;
    initTransfer(userId, amount);
  }

  render() {
    const { templateSaved } = this.state;
    const { users, userId, amount, transferred, error } = this.props;

    if (templateSaved) {
      return <Redirect to="/templates" />;
    }

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
            <Link
              to="/"
              className="btn btn-default"
              style={{
                display:
                  transferred !== transferredValues.SUCCESS ? "none" : "block"
              }}
            >
              Back to List
            </Link>
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
  initTransfer: PropTypes.func.isRequired,
  saveTemplate: PropTypes.func.isRequired,
  error: PropTypes.any
};

export default TransferStep3;
