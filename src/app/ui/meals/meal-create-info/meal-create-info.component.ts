import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-meal-create-info',
  templateUrl: './meal-create-info.component.html',
  styleUrls: ['./meal-create-info.component.css']
})
export class MealCreateInfoComponent implements OnInit {
 
  @Input() day: string;
  @Input() time: string;
  description: string;

  constructor() {
  }

  ngOnInit() {
    this.description = " вводить в граммах"
  }

}
