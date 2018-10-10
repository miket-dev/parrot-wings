import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./templatePanel.scss";

class TemplatePanel extends React.Component {
  componentDidMount() {
    const { templates, getTemplates, userId } = this.props;
    if (!templates) {
      getTemplates(userId);
    }
  }

  render() {
    const { templates } = this.props;

    return (
      <div className="col-md-9">
        <div className="profile-content">
          <h2>Templates</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Correspondent</th>
                <th scope="col">Amount</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {(templates || []).map((x, i) => (
                <tr key={x.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{x.userTo.name}</td>
                  <td>{x.amount}</td>
                  <td>
                    <Link
                      className="btn btn-primary small-text"
                      to={{
                        pathname: "/transfer",
                        state: {
                          preSelectedUserId: x.userTo.id,
                          preSelectedAmount: x.amount
                        }
                      }}
                    >
                      Use
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

TemplatePanel.propTypes = {
  userId: PropTypes.number.isRequired,
  templates: PropTypes.array,
  getTemplates: PropTypes.func.isRequired
};

export default TemplatePanel;
