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
  budget: string = "минус -";
  public category: string;
  comment: string;
  booker: Booker;
  price: Price = new Price();
  PieChart: any;

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
    this.PieChart = new Chart('pie', {
      type: 'doughnut',
      data: {
        labels: ['Еда', 'Бензин', 'Одежда', 'Алкоголь', 'Питомцы', "Кредиты", "Дом"],
        datasets: [
          {
            label: 'First Dataset',
            data: [this.price.food, this.price.gas, this.price.clothes,  this.price.alcohol, this.price.pets, this.price.loans, this.price.home], backgroundColor: [
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

  moveToAddRecord(value: string){
    this.category = value;
    this.isAdding = true;
  }
}
