import { Container } from 'inversify';
//tokens
import types from './types';

//dependecies
import { Employee, OberDriver, googleMapNavigator } from './classes';

//DI container
const container = new Container()

//providing the dependencies
container.bind(types.employee).to(Employee)
container.bind(types.driver).to(OberDriver)
container.bind(types.navigator).to(googleMapNavigator)

export {container}
