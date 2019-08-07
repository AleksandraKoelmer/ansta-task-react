import React from "react";
import { connect } from "react-redux";
import { addEmployee } from "../redux/actions";
import { store } from '../redux/store'

class NewEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imie: '',
            nazwisko: '',
            dzial: null,
            wynagrodzenieKwota: 0,
            wynagrodzenieWaluta: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    onSubmit(e) {
        e.preventDefault();
        let newEmployee = this.state;
        store.dispatch(addEmployee(newEmployee));
    };

    handleChange = (key) => {
        this.setState({ [key]: event.target.value });
    };

    render() {
        return (
            <form id='newEmployeeForm'>
                <input placeholder='imie' onChange={() => this.handleChange('imie')}></input>
                <input placeholder='nazwisko' onChange={() => this.handleChange('nazwisko')}></input>
                <select onChange={() => this.handleChange('dzial')}>
                    <option disabled >Wybierz dział</option>
                    <option>IT</option>
                    <option>Administracja</option>
                    <option>Handlowiec</option>
                </select>
                <input type='number' min='0' placeholder='wynagrodzenie' onChange={(val) => this.handleChange('wynagrodzenieKwota', val)}></input>
                <select onChange={() => this.handleChange('wynagrodzenieWaluta')}>
                    <option disabled >Wybierz walutę</option>
                    <option>PLN</option>
                    <option>EUR</option>
                </select>
                <input type='submit' onClick={this.onSubmit}></input>
            </form>
        );
    };
};

export default connect(null, { addEmployee })(NewEmployeeForm);