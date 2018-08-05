import React from "react";
import { Link } from "react-router-dom";
import appActions from "../../../actions/appActions";
import { connect } from "react-redux";
import "./TemplatePanel.scss";

class TemplatePanel extends React.Component {
  constructor(props) {
    super(props);

    //eslint-disable-next-line
    const { dispatch } = props;
    dispatch(appActions.getTemplates());
  }

  render() {
    //eslint-disable-next-line
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
              {templates.map((x, i) => (
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

const mapStateToProps = state => ({
  templates: state.get("templates")
});

const connectedPanel = connect(mapStateToProps)(TemplatePanel);

export { connectedPanel as TemplatePanel };
