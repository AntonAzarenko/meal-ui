import {Component, OnInit} from '@angular/core';
import {BookerService} from '../../services/booker.service';
import {Booker} from '../common/domain/Booker';
import {Chart} from 'chart.js';
import {Price} from '../common/domain/Price';

@Component({
  selector: 'app-booker',
  templateUrl: './booker.component.html',
  styleUrls: ['./booker.component.css']
})
export class BookerComponent implements OnInit {

  public category: string;
  public calculator: string;
  check: string;
  comment: string;
  booker: Booker;
  price: Price = new Price();
  show: boolean = false;
  PolarAreaChart: any;

  constructor(private bookerService: BookerService) {
  }

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.bookerService.getReport().subscribe((data: any) => {
      this.price = data;
      this.dataInit();
    });
  }

  dataInit() {
    this.PolarAreaChart = new Chart('polarArea', {
      type: 'polarArea',
      data: {
        labels: ['Еда', 'Бензин', 'Одежда', 'Алкоголь'],
        datasets: [
          {
            label: 'First Dataset',
            data: [this.price.food, this.price.gas, this.price.clothes,  this.price.alcohol], backgroundColor: [
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#6fabed',
            ],
            fill: false,
            borderColor: '#4bc0c0'
          },
        ]
      }
    });
  }

  addNewRecord() {
    this.show = false;
    this.booker = new Booker(this.check, this.category);
    this.bookerService.save(this.booker).subscribe();
    window.location.reload();
  }

  showBalance() {
    this.show = true;
    this.bookerService.getPrice(this.category).subscribe((data: any) => {
      this.price = data;
      console.log(this.price);
    });
  }
}
