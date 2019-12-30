export class Booker {

  private countPrice;
  private checkDate;
  private type;
  private userEmail;
  private comment;

  constructor(countPrice, type, comment) {
    this.countPrice = countPrice;
    this.type = type;
    this.comment = comment;
  }
}
