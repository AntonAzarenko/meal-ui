import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {FoodService} from 'src/app/services/food.service';
import {Meal} from '../../common/domain/Meal';
import {MenuService} from 'src/app/services/menu.service';
import {Food} from '../../common/domain/Food';
import {MatSnackBar, MatTableDataSource} from '@angular/material';

import {Filter} from '../../common/domain/Filter';
import {SelectionModel} from '@angular/cdk/collections';

export interface Interface {

}

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  isShowFilteredMenu = false;
  isMainMenu = true;
  isNewMenu = false;
  meal: Meal;
  datasource: Meal[];
  dayOfWeek: string;
  timeOfDay: string;
  food: Food;
  menus: object[];
  menuTitle: string;
  filter: Filter;
  count: number;
  toppings = new FormControl();
  toppingList: string[] = ['Белки', 'Углеводы', 'Жиры'];
  displayedColumns: string[] = ['select', 'food', 'weight', 'count'];
  foods: MatTableDataSource<Meal>;
  selection = new SelectionModel<Meal>(true, []);

  constructor(private router: Router,
              private foodService: FoodService,
              private menuService: MenuService,
              public snackBar: MatSnackBar,
              private service: MenuService) {
  }

  ngOnInit() {
    this.getAllMenus();
    this.getAllFoods();
  }

  getAllFoods() {
    this.foodService.getAllFoods().subscribe((data: any[]) => {
      this.foods = new MatTableDataSource<Meal>(data);
    });
  }

  getAllMenus() {
    this.menuService.getAllMenus().subscribe((data: any[]) => {
      this.menus = (data);
      if (this.menus[0] == null) {
        this.isNewMenu = true;
        this.isMainMenu = false;
      }
    });
  }

  updateMenu(event: any) {
    this.menuService.getMenu(this.menuTitle).subscribe((data: Meal[]) => {
      this.datasource = (data);
    });
  }

  findToFilter() {
    this.filter = new Filter(this.toppings.value[0], this.toppings.value[1], this.toppings.value[2]);
    console.log(this.filter);
    this.foodService.getFoodsByFilter(this.filter).subscribe((data: any[]) => {
        this.foods = new MatTableDataSource<Meal>(data);
        this.isShowFilteredMenu = true;
        this.isMainMenu = false;
      },
      error => {
        this.snackBar.open(error.message, 'ERROR', {
          duration: 5000,
        });
      });
  }

  addMeal() {
    this.selection.selected.forEach(e => {
      e.day = this.dayOfWeek;
      e.meal = this.timeOfDay;
      e.food = e.title;
      e.menuTitle = this.menuTitle;
      console.log(this.selection.selected)
      }
    );
    if (this.checkMeal()) {
      //this.appendMeal();
      this.service.save(this.selection.selected).subscribe((data: any) => {
        //this.menu.push(data);
        this.snackBar.open('Еда добавлена в меню', 'Ok', {
          duration: 5000,
        });
      });
      this.updateMenu(this.menuTitle);
      this.clearTable();
    } else {
      this.snackBar.open('Заполните все поля', 'ERROR', {
        duration: 5000,
      });
    }
  }

  private checkMeal(): boolean {
    if (this.dayOfWeek != null && this.menuTitle != null && this.timeOfDay != null) {
      return true;
    }
    return false;
  }

  private appendMeal(): void {
    this.meal = new Meal();
    this.meal.count = this.count;
    this.meal.menuTitle = this.menuTitle;
    this.meal.meal = this.timeOfDay;
    this.meal.food = this.food.title;
    this.meal.day = this.dayOfWeek;
  }

  clearInput() {
    this.count = null;
  }

  addMenuTitle(value: string) {
    this.isNewMenu = false;
    this.isMainMenu = true;
    this.menuTitle = value;
  }

  private clearTable() {
    this.meal = null;
    this.clearInput();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.foods.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.foods.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Meal): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }

  back(){
    this.isMainMenu =true;
    this.isShowFilteredMenu = false;
    this.selection.clear();
  }
}
