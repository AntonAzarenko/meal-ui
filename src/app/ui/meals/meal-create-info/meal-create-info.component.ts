import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../../common/domain/Meal';
import {CreateMenuComponent} from '../create-menu/create-menu.component';
import {FoodService} from '../../../services/food.service';
import {MatSnackBar} from '@angular/material';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-meal-create-info',
  templateUrl: './meal-create-info.component.html',
  styleUrls: ['./meal-create-info.component.css']
})
export class MealCreateInfoComponent implements OnInit {

  @Input() day: string;
  @Input() time: string;
  @Input() meal: Meal;

  count: number;
  menuTitle: string;
  menu: object[];

  constructor(private createMenu: CreateMenuComponent, private service: MenuService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  onKey(event: any) {
    this.createMenu.getAllFoods();
    if(!isNaN(event.target.value * 1)) {
      if (this.meal.carbohydrates != 0) {
        this.meal.carbohydrates = event.target.value * this.meal.carbohydrates;
      } else if (this.meal.fats != 0) {
        this.meal.fats = event.target.value * this.meal.fats;
      } else if (this.meal.protein != 0) {
        this.meal.protein = event.target.value * this.meal.protein;
      }
    }else {
      this.snackBar.open('Введите число', 'error', {
        duration: 2000,
      });
    }
    //this.clearInput();
  }

  addMeal() {
    if (this.checkMeal()) {
      this.appendMeal();
      console.log(this.meal);
      this.service.save(this.meal).subscribe((data: any) => {
        //this.menu.push(data);
        this.snackBar.open('Еда добавлена в меню', 'Ok', {
          duration: 2000,
        });
      });
      this.createMenu.updateMenu(this.menuTitle);
      this.clearTable();
    } else {
      this.snackBar.open('Заполните все поля', 'ERROR', {
        duration: 2000,
      });
    }
  }

  private appendMeal(): void {
    this.meal.day = this.day;
    this.meal.count = this.count;
    this.meal.menuTitle = this.menuTitle;
    this.meal.meal = this.time;
    this.meal.food = this.meal.title;
  }

  clearInput() {
    this.count = null;
  }

  private clearTable() {
    this.day = null;
    this.meal = null;
    this.time = null;
    this.clearInput();

  }

  private checkMeal(): boolean {
    if (this.day != null && this.menuTitle != null && this.time != null) {
      return true;
    }
    return false;
  }
}
