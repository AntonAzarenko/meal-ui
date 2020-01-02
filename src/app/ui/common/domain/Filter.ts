import {FormControl} from '@angular/forms';

export class Filter {
  public carbohydrates;
  public fats;
  public protein;

  constructor(value: string, value2: string, value3: string) {
    this.init(value);
    this.init(value2);
    this.init(value3);
  }

  private init(value: any) {
    if (value === 'Углеводы') {
      this.carbohydrates = '1';
    }
    if (value === 'Белки') {
      this.protein = '1';
    }
    if (value === 'Жиры') {
      this.fats = '1';
    }
  }
}
