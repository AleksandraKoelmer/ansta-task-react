import { SEARCH_EMPLOYEE,  ADD_EMPLOYEE, FILTER_BY_SALARY, FILTER_BY_DEPARTMENT} from "./actionTypes";

export const searchEmployee = content => ({
  type: SEARCH_EMPLOYEE,
  payload: {
    content
  }
});

export const addEmployee = content => ({
  type: ADD_EMPLOYEE,
  payload: {
    content
  }
});

export const filterBySalary = content => ({
  type: FILTER_BY_SALARY,
  payload: {
    content
  }
});

export const filterByDepartment = content => ({
  type: FILTER_BY_DEPARTMENT,
  payload: {
    content
  }
});

