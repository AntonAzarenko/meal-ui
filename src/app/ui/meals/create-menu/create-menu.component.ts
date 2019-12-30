import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { Meal } from '../../common/domain/Meal';
import { MenuService } from 'src/app/services/menu.service';
import { Food } from '../../common/domain/Food';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  meal: Meal;
  datasource: Meal[];
  dayOfWeek: string;
  timeOfDay: string;
  food: Food;
  foods: object[];
  menus: object[];
  menuTitle: string;
  filter: string;
  foodDescription: string;
  count: number;
  isNewMenu = false;

  constructor(private router: Router,
     private foodService: FoodService,
     private menuService: MenuService,
     public snackBar: MatSnackBar,
     private service: MenuService) {
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
      if(this.menus[0] == null){
          this.isNewMenu = true;
      }
    });
  }

  updateMenu(event: any){
    this.menuService.getMenu(this.menuTitle).subscribe((data:Meal[]) => {
      this.datasource = (data);
    });
  }

  findToFilter() {

  }

  addMeal() {
    if (this.checkMeal()) {
      this.appendMeal();
      this.service.save(this.meal).subscribe((data: any) => {
        //this.menu.push(data);
        this.snackBar.open('Еда добавлена в меню', 'Ok', {
          duration: 2000,
        });
      });
      this.updateMenu(this.menuTitle);
      this.clearTable();
    } else {
      this.snackBar.open('Заполните все поля', 'ERROR', {
        duration: 2000,
      });
    }
  }

  private checkMeal(): boolean {
    if (this.dayOfWeek != null && this.menuTitle != null && this.timeOfDay != null && this.food != null) {
      return true;
    }
    return false;
  }

  private appendMeal(): void {
    console.log(this.dayOfWeek)
    console.log(this.menuTitle)
    console.log(this.timeOfDay)
    console.log(this.food)
    this.meal = new Meal();
    this.meal.count = this.count;
    this.meal.menuTitle = this.menuTitle;
    this.meal.meal = this.timeOfDay;
    this.meal.food = this.food.title;
    this.meal.day = this.dayOfWeek;
    console.log(this.meal);
  }

  clearInput() {
    this.count = null;
  }

  addMenuTitle(value: string){
    this.isNewMenu = false;
    this.menuTitle = value;
  }

  private clearTable() {
    this.meal = null;
    this.clearInput();
  }
}
