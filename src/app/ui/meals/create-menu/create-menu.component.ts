import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  dayOfWeek: string;
  timeOfDay: string;
  food: object;
  foods: object[];
  foodDescription: string;

  constructor(private router: Router, private foodService: FoodService) {
  }

  ngOnInit() {
    this.getAllFoods();
  }

  back() {
  }

  getAllFoods(){
    this.foodService.getAllFoods().subscribe((data:any[]) => {
      this.foods = data;
    });
  }
}
