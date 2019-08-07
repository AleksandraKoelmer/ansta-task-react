import React from "react";
import NewEmployeeForm from './NewEmployeeForm'


class NewEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewEmployeeForm: false
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange() {
        if (!this.state.showNewEmployeeForm) {
            this.setState(
                { showNewEmployeeForm: true },
                () => { }
            )
        }
        else this.setState({ showNewEmployeeForm: false }, () => { })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Dodaj nowego pracownika</button>
                {this.state.showNewEmployeeForm ? <NewEmployeeForm /> : null}
            </div>
        );
    };
};

export default NewEmployee;