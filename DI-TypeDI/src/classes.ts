import { FactoryInterface, CoffeeMakerInterface } from './interfaces';
import { injectable, inject } from 'tsyringe';
import { tokens } from './tokens';

@injectable()
export class SugarFactory implements FactoryInterface {
  name: string = "sugar";

  combine() {
    return this.name
  }
}

@injectable()
export class WaterFactory implements FactoryInterface {
  name: string = "water";

  combine() {
    return this.name
  }
}

@injectable()
export class BeanFactory implements FactoryInterface {
  name: string = "Bean";

  combine() {
    return this.name
  }
}

@injectable()
export class CoffeeMaker implements CoffeeMakerInterface {
  constructor(
    @inject(tokens.SugarFactory) private sugar: FactoryInterface,
    @inject(tokens.BeanFactory) private bean: FactoryInterface,
    @inject(tokens.WaterFactory) private water: FactoryInterface,
  ) {
  }

  make() {
    console.log(`coffee is made by ${this.sugar.combine()}
                 and ${this.bean.combine()}
                 and ${this.water.combine()}`
    )
  }
}
