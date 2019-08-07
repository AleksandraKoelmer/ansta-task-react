import React from "react";
import { connect } from "react-redux";
import { filterBySalary } from "../redux/actions";
import { store } from '../redux/store'

class SalaryFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: null,
            max: null
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (key) => {
        this.setState({ [key]: event.target.value }, () => store.dispatch(filterBySalary(this.state)))
    };

    render() {
        return (
            <form id='salaryFilter'>
                <input placeholder='min' min='0' step='100' type='number' onChange={() => this.handleChange('min')}></input>
                <input placeholder='max' min='0' step='100' type='number' onChange={() => this.handleChange('max')}></input>
            </form>
        );
    };
};

export default connect(null,{ filterBySalary })(SalaryFilter);