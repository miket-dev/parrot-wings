import React from "react";
import { Link } from "react-router-dom";
import appActions from "../../../actions/appActions";
import { connect } from "react-redux";
import "./TransactionsPanel.scss";

const SORT_DIRECTION = {
  ASC: "ASC",
  DESC: "DESC"
};

class TransactionsPanel extends React.Component {
  constructor(props) {
    super(props);

    //eslint-disable-next-line
    const { dispatch } = props;
    dispatch(appActions.getTransactions());

    this.state = {
      sorts: null
    };
  }

  sortBy = fieldName => {
    let { sorts } = this.state;

    if (!sorts) {
      sorts = {
        fieldName,
        direction: SORT_DIRECTION.ASC
      };
    } else if (sorts.direction === SORT_DIRECTION.ASC) {
      sorts.direction = SORT_DIRECTION.DESC;
    } else if (sorts.direction === SORT_DIRECTION.DESC) {
      sorts = null;
    } else {
      sorts.direction = SORT_DIRECTION.ASC;
    }

    this.setState({ sorts });
  };

  arraySort(a, b, sort) {
    let item1 = a;
    let item2 = b;
    if (sort.fieldName.indexOf(".") > -1) {
      let fieldsPath = sort.fieldName.split(".");
      fieldsPath.forEach(path => {
        item1 = item1[path];
        item2 = item2[path];
      });
    } else {
      item1 = item1[sort.fieldName];
      item2 = item2[sort.fieldName];
    }

    if (sort.direction === SORT_DIRECTION.ASC) {
      if (item1 > item2) {
        return 1;
      } else if (item1 < item2) {
        return -1;
      } else {
        return 0;
      }
    }

    if (sort.direction === SORT_DIRECTION.DESC) {
      if (item1 < item2) {
        return 1;
      } else if (item1 > item2) {
        return -1;
      } else {
        return 0;
      }
    }

    return 0;
  }

  render() {
    //eslint-disable-next-line
    let { transactions } = this.props;
    const { sorts } = this.state;

    let sortedTransactions = transactions.sort((a, b) => {
      if (sorts) {
        return this.arraySort(a, b, sorts);
      }

      return 0;
    });

    return (
      <div className="col-md-9">
        <div className="profile-content">
          <h2>Transactions</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th
                  scope="col"
                  className="sortable"
                  onClick={() => this.sortBy("user.name")}
                >
                  Correspondent{" "}
                  {sorts &&
                    sorts.fieldName === "user.name" &&
                    `(${sorts.direction})`}
                </th>
                <th scope="col">Type</th>
                <th
                  scope="col"
                  className="sortable"
                  onClick={() => this.sortBy("amount")}
                >
                  Amount{" "}
                  {sorts &&
                    sorts.fieldName === "amount" &&
                    `(${sorts.direction})`}
                </th>
                <th scope="col">Resource after transaction</th>
                <th
                  scope="col"
                  className="sortable"
                  onClick={() => this.sortBy("date")}
                >
                  Date{" "}
                  {sorts &&
                    sorts.fieldName === "date" &&
                    `(${sorts.direction})`}
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((x, i) => (
                <tr key={x.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{x.user.name}</td>
                  <td>{x.type}</td>
                  <td>{x.amount}</td>
                  <td>{x.resource}</td>
                  <td>{x.date.toString()}</td>
                  {x.type === "Credit" && (
                    <td>
                      <Link
                        className="btn btn-primary small-text"
                        to={{
                          pathname: "/transfer",
                          state: {
                            preSelectedUserId: x.user.id,
                            preSelectedAmount: x.amount
                          }
                        }}
                      >
                        Copy
                      </Link>
                    </td>
                  )}
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
  transactions: state.get("transactions")
});

const connectedPanel = connect(mapStateToProps)(TransactionsPanel);

export { connectedPanel as TransactionsPanel };
