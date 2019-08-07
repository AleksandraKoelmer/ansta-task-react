import React from 'react';
import { connect } from "react-redux";
import { filterByDepartment } from '../redux/actions';

class Summary extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let sumIT = 0;
        let sumHandlowiec = 0;
        let sumAdministracja = 0;
        this.props.employers.forEach(function (item) {
            if (item.dzial === 'IT') {
                sumIT += parseInt(item.wynagrodzenieKwota)
            }
            else if (item.dzial === 'Administracja') {
                sumAdministracja += parseInt(item.wynagrodzenieKwota)
            }
            else {
                sumHandlowiec += parseInt(item.wynagrodzenieKwota)
            };
        });

        return (
            <div id='wynagrodzenia'>
                <div> Suma wynagrodzeń wszystkich pracowników:{sumIT + sumAdministracja + sumHandlowiec}</div>
                <div> Wynagrodzenia pracowników działu IT: {sumIT}</div>
                <div> Wynagrodzenia pracowników działu Administracja:{sumAdministracja}</div>
                <div> Wynagrodzenia pracowników działu handlowego:{sumHandlowiec}</div>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return { employers: state.employers.employersToShow }
};

export default connect(mapStateToProps, { filterByDepartment })(Summary);