import "reflect-metadata";
import { tokens } from './tokens';
import { CoffeeMakerInterface } from './interfaces';
import {childContainer} from './container';


const coffee = childContainer.resolve<CoffeeMakerInterface>(tokens.CoffeeMaker)

coffee.make()

