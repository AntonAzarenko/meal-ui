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

  isAdding: boolean = false;
  budget: string = 'минус -';
  public category: string;
  comment: string;
  booker: Booker;
  price: Price = new Price();
  PieChart: any;
  clickedMonth: number;
  currentMonth: number;
  month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private bookerService: BookerService) {
  }

  ngOnInit() {
    this.getReport();
  }

  left() {
    if (this.clickedMonth > 2) {
      this.clickedMonth = this.clickedMonth - 1;
    }
  }

  right() {

  }

  getReport() {
    this.bookerService.getReport().subscribe((data: any) => {
      this.price = data;
      this.dataInit();
    });
  }

  dataInit() {
    this.PieChart = new Chart('pie', {
      type: 'doughnut',
      data: {
        labels: ['Еда', 'Бензин', 'Одежда', 'Алкоголь', 'Питомцы', 'Кредиты', 'Дом'],
        datasets: [
          {
            label: 'First Dataset',
            data: [this.price.food, this.price.gas, this.price.clothes, this.price.alcohol, this.price.pets, this.price.credit, this.price.home],
            backgroundColor: [
              '#FF6384',
              '#3ec0a5',
              '#50ff8c',
              '#6fabed',
              '#e9ed11',
              '#ed2700',
            ],
            fill: false,
            borderColor: '#4bc0c0'
          },
        ]
      }
    });
  }

  moveToAddRecord(value: string) {
    this.category = value;
    this.isAdding = true;
  }
}
