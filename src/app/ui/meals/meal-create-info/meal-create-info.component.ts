import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../../common/domain/Meal';
import {CreateMenuComponent} from '../create-menu/create-menu.component';
import {FoodService} from '../../../services/food.service';
import {MatSnackBar} from '@angular/material';
import {MenuService} from '../../../services/menu.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-meal-create-info',
  templateUrl: './meal-create-info.component.html',
  styleUrls: ['./meal-create-info.component.css']
})
export class MealCreateInfoComponent implements OnInit {


  count: number;
  menuTitle: string;
  menu: object[];
  isLoginIn: boolean = false;

  constructor(private createMenu: CreateMenuComponent, private service: MenuService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
}
