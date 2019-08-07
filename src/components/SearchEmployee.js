import React from "react";
import { connect } from "react-redux";
import { searchEmployee } from "../redux/actions";
import { store } from '../redux/store'

class SearchEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  };

  updateInput = input => {
    this.setState({ input }, () => store.dispatch(searchEmployee(input)));
  };

  render() {
    return (
      <div id = 'personElement'>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder = 'szukaj osoby'
        />
      </div>
    );
  };
};

export default connect(null, { searchEmployee })(SearchEmployee);

