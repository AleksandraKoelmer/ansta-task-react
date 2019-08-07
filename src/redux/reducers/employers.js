import { SEARCH_EMPLOYEE, ADD_EMPLOYEE, FILTER_BY_SALARY, FILTER_BY_DEPARTMENT } from "../actionTypes";
import { employers } from '../../components/employers'

const initialState = {
  employers: employers,
  employersToShow: employers
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SEARCH_EMPLOYEE: {
      const { content } = action.payload;
      let searchingEmployers = state.employers.filter(containsSearchingText);

      function containsSearchingText(employee) {
        if (employee.imie.toLowerCase().includes(content) || employee.nazwisko.toLowerCase().includes(content))
          return employee;
      };

      return {
        ...state,
        employersToShow: searchingEmployers
      };
    };

    case ADD_EMPLOYEE: {
      const { content } = action.payload;

      return {
        ...state,
        employers: [...state.employers, content],
        employersToShow: [...state.employersToShow, content]
      };
    };

    case FILTER_BY_SALARY: {
      const { content } = action.payload;
      let searchingEmployers = filterBySalary(content.min, content.max);

      function filterBySalary(min, max) {
        let searching = state.employers.filter(salaryInScope);
        function salaryInScope(employee) {
          if (parseInt(employee.wynagrodzenieKwota) > min && parseInt(employee.wynagrodzenieKwota) < max) {
            return employee
          };
        };
        return searching;
      };
      return {
        ...state,
        employersToShow: searchingEmployers
      };
    };

    case FILTER_BY_DEPARTMENT: {

      const { content } = action.payload;
      let searchingDepartments = getTrueKeys(content);
      function getTrueKeys(obj) {
        var ret = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key) && obj[key] === true) {
            ret.push(key);
          }
        }
        return ret;
      }
      let searchingEmployers = state.employers.filter(function (employee) {
        if (searchingDepartments.includes(employee.dzial))
          return employee;
      });
      return {
        ...state,
        employersToShow: searchingEmployers
      };
    }
    default:
      return state;
  };
};
