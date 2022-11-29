import { injectable, inject } from 'inversify';
import types from './types';
import {
  EmployeeInterface,
  NavigatorInterface,
  DriverInterface,
} from './interfaces';

// @injectable()
// export class Employee implements EmployeeInterface{
//   constructor(@inject(types.driver) private driverName:DriverInterface) {
//   }
//
//   gotoCompany() {
//    return `the employee is going to the company by ${this.driverName.driving()} driver`
//   }
// }
//
// @injectable()
// export class OberDriver implements DriverInterface{
//   name: string = "OberTaxi"
//
//   constructor(@inject(types.navigator) private navigatorName:NavigatorInterface ) {
//
//   }
//
//   driving() {
//     return `the${this.name} driver is driving by ${this.navigatorName.navigating()} navigator`;
//   }
// }
//
// @injectable()
// export class googleMapNavigator implements NavigatorInterface{
//   navigatorName: string = "googleMap";
//
//   navigating() {
//     return `the ${this.navigatorName} is tracing the great way for driver`
//   }
// }

@injectable()
export class Employee implements EmployeeInterface{
  constructor() {
  }

  gotoCompany() {
    return ""
  }
}

@injectable()
export class OberDriver implements DriverInterface{
  name: string = "OberTaxi"

  constructor(@inject(types.navigator) private navigatorName:NavigatorInterface ) {

  }

  driving() {
    return ""
  }
}

@injectable()
export class googleMapNavigator implements NavigatorInterface{
  navigatorName: string = "googleMap";

  navigating() {
    return ""
  }
}

