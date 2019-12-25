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
  budget: string;
  public category: string;
  comment: string;
  booker: Booker;
  price: Price = new Price();
  PieChart: any;
  clickedMonth: number;
  currentMonth: number;
  currentYear: number;

  constructor(private bookerService: BookerService) {
  }

  ngOnInit() {
    this.getCurrentReport();
  }

  left() {
    if (this.clickedMonth > 1) {
      this.clickedMonth = this.clickedMonth - 1;
      this.currentMonth = this.currentMonth - 1;
    } else if (this.clickedMonth === 1) {
      this.clickedMonth = 12;
      this.currentMonth = 12;
      this.currentYear = this.currentYear - 1;
    }
    this.getReport();
    console.log(this.currentMonth);
  }

  right() {
    if (this.clickedMonth < 12) {
      this.clickedMonth = this.clickedMonth + 1;
      this.currentMonth = this.clickedMonth;
    } else if (this.clickedMonth === 12) {
      this.clickedMonth = 1;
      this.currentMonth = 1;
      this.currentYear = this.currentYear + 1;
    }
    this.getReport();
  }

  getReport() {
    this.bookerService.getReport(this.currentYear, this.currentMonth).subscribe((data: any) => {
      this.price = data;
      this.budget = 'минус - ' + this.price.profit;
      this.dataInit();
    });
  }

  getCurrentReport() {
    this.bookerService.getCurrentReport().subscribe((data: any) => {
      this.price = data;
      this.budget = 'минус - ' + this.price.profit;
      this.dataInit();
      var curdate = new Date(this.price.currentDateTime);
      this.currentMonth = curdate.getMonth() + 1;
      this.clickedMonth = curdate.getMonth() + 1;
      this.currentYear = curdate.getFullYear();
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
              '#0809ed',
              '#6fabed',
              '#e9ed11',
              '#ed2700',
              '#f186ff'
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

  back(){
    this.isAdding = false;
    this.getCurrentReport();
  }

  reloadPage() {
    window.location.reload();
  }
}
