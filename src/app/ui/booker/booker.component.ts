import {Component, OnInit} from '@angular/core';
import {BookerService} from '../../services/booker.service';
import {Booker} from '../common/domain/Booker';

@Component({
  selector: 'app-booker',
  templateUrl: './booker.component.html',
  styleUrls: ['./booker.component.css']
})
export class BookerComponent implements OnInit {

  public category: string;
  public calculator: string;
  check: string;
  date: string;
  comment: string;
  booker: Booker;
  price: string;

  constructor(private bookerService: BookerService) {
  }

  ngOnInit() {
  }

  addNewRecord() {
    this.booker = new Booker(this.check, this.category);
    this.bookerService.save(this.booker).subscribe();
  }

  showBalance() {
    this.bookerService.getPrice(this.category).subscribe((data:any) => {
      this.price = data;
      console.log(this.price)
    });
  }

  one() {
    this.calculator = '1';
  }

  two() {
    this.calculator = '2';
  }

  three() {
    this.calculator = '3';
  }

  four() {
    this.calculator = '4';
  }
}
