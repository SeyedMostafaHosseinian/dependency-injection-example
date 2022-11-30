import "reflect-metadata";
import { container } from './container';
import types from './types';
import { EmployeeInterface, DriverInterface, NavigatorInterface } from './interfaces';

// const employee = container.get<EmployeeInterface>(types.employee)
// const driver = container.get<DriverInterface>(types.driver)
const navigator = container.get<NavigatorInterface>(types.navigator)

// function run() {
//   console.log(employee.gotoCompany())
//   console.log(driver.driving())
//   console.log(navigator.navigating())
//
//
//
// }

// run()
navigator.navigating()
