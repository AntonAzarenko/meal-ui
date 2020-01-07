export class Meal {
  private _id;
  private _title;
  private _weight;
  private _calories;
  private _protein;
  private _fats;
  private _carbohydrates;
  private _description;
  private _menuTitle;
  private _day;
  private _count;
  private _meal;
  private _food;

  constructor(){}


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }

  get calories() {
    return this._calories;
  }

  set calories(value) {
    this._calories = value;
  }

  get protein() {
    return this._protein;
  }

  set protein(value) {
    this._protein = value;
  }

  get fats() {
    return this._fats;
  }

  set fats(value) {
    this._fats = value;
  }

  get carbohydrates() {
    return this._carbohydrates;
  }

  set carbohydrates(value) {
    this._carbohydrates = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get menuTitle() {
    return this._menuTitle;
  }

  set menuTitle(value) {
    this._menuTitle = value;
  }

  get day() {
    return this._day;
  }

  set day(value) {
    this._day = value;
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
  }

  get meal() {
    return this._meal;
  }

  set meal(value) {
    this._meal = value;
  }

  get food() {
    return this._food;
  }

  set food(value) {
    this._food = value;
  }
}
