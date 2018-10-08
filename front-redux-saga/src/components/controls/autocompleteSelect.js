import React from "react";
import PropTypes from "prop-types";
import "./autocompleteSelect.scss";

class AutocompleteSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displayList: false, filterExpression: null };
  }

  handleFocus = val => {
    this.setState(prevState => (prevState.displayList = val));
  };

  handleItemSelect = e => {
    const { dataSource } = this.props;
    this.hiddenElement.value = e;
    this.input.value = dataSource.filter(x => x.id === e)[0].name;

    this.setState(prevState => (prevState.displayList = false));
  };

  searchFunction = (x, searchValue) => {
    return x.name.toLowerCase().indexOf(searchValue.toLowerCase) > -1;
  };

  handleInput = () => {
    let searchExpression = this.input.value;

    const { dataSource } = this.props;
    let items = dataSource.filter(
      x => x.name.toLowerCase() === searchExpression.toLowerCase()
    );

    if (items.length === 1) {
      let item = items[0];

      this.hiddenElement.value = item.id;
      this.input.value = item.name;

      this.setState(prevState => (prevState.displayList = false));
    } else if (items.length === 0) {
      this.hiddenElement.value = "";

      this.setState(prevState => {
        prevState.displayList = true;
        prevState.filterExpression = !searchExpression
          ? null
          : searchExpression;

        return prevState;
      });
    }
  };

  componentDidMount() {
    const { value, dataSource } = this.props;
    if (value && dataSource.length > 0) {
      this.hiddenElement.value = value;
      this.input.value = dataSource.filter(x => x.id === value)[0].name;
    }
  }

  render() {
    const { name, dataSource } = this.props;
    const { displayList, filterExpression } = this.state;

    let displayDataSource = filterExpression
      ? dataSource.filter(
          x => x.name.toLowerCase().indexOf(filterExpression.toLowerCase()) > -1
        )
      : dataSource;

    return (
      <div className="autocomplete-select">
        <input
          type="hidden"
          name={name}
          ref={val => (this.hiddenElement = val)}
        />
        <input
          ref={val => (this.input = val)}
          onInput={this.handleInput}
          onFocus={() => this.handleFocus(true)}
          type="text"
          placeholder="Select your option..."
          className="form-control"
        />
        <div
          className="list"
          style={{ display: displayList ? "block" : "none" }}
        >
          <ul>
            {displayDataSource.map(x => (
              <li key={x.id} onClick={() => this.handleItemSelect(x.id)}>
                {x.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

AutocompleteSelect.propTypes = {
  dataSource: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};

export default AutocompleteSelect;
