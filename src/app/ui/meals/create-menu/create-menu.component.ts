import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { Meal } from '../../common/domain/Meal';
import { MenuService } from 'src/app/services/menu.service';
import { Food } from '../../common/domain/Food';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  datasource: Meal[];
  dayOfWeek: string;
  timeOfDay: string;
  food: Food;
  foods: object[];
  menus: object[];
  menuTitle: string;
  foodDescription: string;

  displayedColumns: string[] = ['day', 'meal', 'food', 'count'];

  constructor(private router: Router, private foodService: FoodService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.getallMenus();
    this.getAllFoods();
  }

  getAllFoods(){
    this.foodService.getAllFoods().subscribe((data:any[]) => {
      this.foods = (data);
    });
  }

  getallMenus(){
    this.menuService.getAllMenus().subscribe((data:any[]) => {
      this.menus = (data);
    });
  }

  updateMenu(event: any){
    this.menuService.getMenu(this.menuTitle).subscribe((data:Meal[]) => {
      this.datasource = (data);
    });
  }
}
