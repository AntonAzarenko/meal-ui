import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { Meal } from '../../common/domain/Meal';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  datasource: Meal[];
  dayOfWeek: string;
  timeOfDay: string;
  food: object;
  foods: object[];
  foodDescription: string;

  displayedColumns: string[] = ['day', 'meal', 'food', 'count'];

  constructor(private router: Router, private foodService: FoodService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.getAllFoods();
  }

  back() {
  }

  getAllFoods(){
    this.foodService.getAllFoods().subscribe((data:any[]) => {
      this.foods = (data);
    });
  }

  update(){
    this.updateMenu("123");
  }

  updateMenu(name: string){
    this.menuService.getMenu(name).subscribe((data:Meal[]) => {
      this.datasource = (data);
    });
  }
}
