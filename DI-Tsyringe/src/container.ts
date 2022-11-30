import { container, Lifecycle } from 'tsyringe';
import { tokens } from './tokens';
import {
  CoffeeMaker,
  WaterFactory,
  BeanFactory,
  SugarFactory
} from './classes';

export const childContainer = container.createChildContainer();

childContainer.register(tokens.SugarFactory, SugarFactory, {lifecycle: Lifecycle.Singleton});
childContainer.register(tokens.BeanFactory, BeanFactory, {lifecycle: Lifecycle.Singleton});
childContainer.register(tokens.WaterFactory, WaterFactory, {lifecycle: Lifecycle.Singleton});
childContainer.register(tokens.CoffeeMaker, CoffeeMaker, {lifecycle: Lifecycle.Singleton});
