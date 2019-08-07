import React from 'react';
import { connect } from "react-redux";
import { filterByDepartment } from '../redux/actions';
import { store } from '../redux/store'


class CheckboxesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (option) => {
    this.setState({ [option]: event.target.checked }, () => store.dispatch(filterByDepartment(this.state)))
  };

  render() {
    return (
      <div id='departmentElement'>
        <label >
          <input type='checkbox' onChange={() => this.handleChange('Administracja')} />
          Administracja
        </label>
        <label >
          <input type='checkbox' onChange={() => this.handleChange('IT')} />
          IT
        </label>
        <label >
          <input type='checkbox' onChange={() => this.handleChange('Handlowiec')} />
          Handlowiec
        </label>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { employers: state.employers }
};

export default connect(
  mapStateToProps,
  { filterByDepartment }
)(CheckboxesForm);