export class Price {
  private _food;
  private _gas;
  private _alcohol;
  private _clothes;
  private _pets;
  private _loans;
  private _home;

  get home() {
    return this._home;
  }

  set home(value) {
    this._home = value;
  }

  get pets() {
    return this._pets;
  }

  set pets(value) {
    this._pets = value;
  }

  get loans() {
    return this._loans;
  }

  set loans(value) {
    this._loans = value;
  }

  get food() {
    return this._food;
  }

  set food(value) {
    this._food = value;
  }

  get gas() {
    return this._gas;
  }

  set gas(value) {
    this._gas = value;
  }

  get alcohol() {
    return this._alcohol;
  }

  set alcohol(value) {
    this._alcohol = value;
  }

  get clothes() {
    return this._clothes;
  }

  set clothes(value) {
    this._clothes = value;
  }
}
