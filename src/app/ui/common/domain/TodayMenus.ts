import {Meal} from './Meal';

export class TodayMenus {
  private _menuResponse: Object[];
  private _time: string;


  get menuResponse(): Object[] {
    return this._menuResponse;
  }

  set menuResponse(value: Object[]) {
    this._menuResponse = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
}
