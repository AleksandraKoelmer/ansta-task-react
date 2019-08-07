import React from "react";
import Cell from './Cell'
import { connect } from "react-redux";


class TableRow extends React.Component {
  render() {
    let employersList = this.props.list.employers.employersToShow.map((employee) => {

      return (
        <tr key={employee.imie + employee.nazwisko}>
          <Cell data={employee.imie} />
          <Cell data={employee.nazwisko} />
          <Cell data={employee.dzial} />
          <Cell data={employee.wynagrodzenieKwota} />
          <Cell data={employee.wynagrodzenieWaluta} />
        </tr>)
    });

    return (
      <tbody>{employersList}</tbody>
    );
  };
};
function mapStateToProps(state) {
  return { list: state }
};

export default connect(mapStateToProps)(TableRow);
