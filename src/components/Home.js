import React from "react";
import './home.css'
import SearchEmployee from "./SearchEmployee";
import TableHeader from "./TableHeader";
import TableRow from './TableRow'
import NewEmployee from './NewEmpoloyee'
import SalaryFilter from "./SalaryFilter";
import ChecboxesForm from './CheckboxesForm';
import Summary from './Summary'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div id='nav'>
                    <SearchEmployee />
                    <ChecboxesForm />
                    <SalaryFilter />
                    
                </div>
                <table>
                    <TableHeader />
                    <TableRow />
                </table>
                <NewEmployee />
                <Summary />
            </div>
        );
    };
};

