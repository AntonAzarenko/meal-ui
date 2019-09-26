import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-meal-create-info',
  templateUrl: './meal-create-info.component.html',
  styleUrls: ['./meal-create-info.component.css']
})
export class MealCreateInfoComponent implements OnInit {
  day = 'Понедельник';

  constructor() {
  }

  ngOnInit() {
  }

}
