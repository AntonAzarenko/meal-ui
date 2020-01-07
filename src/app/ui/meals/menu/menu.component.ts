import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {OutcomeInterface} from '../../booker/outcome/outcome.component';
import {MenuService} from '../../../services/menu.service';

export interface Menus {

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  menuTitle: string;
  menus: object[];
  isMainMenu: boolean = true;
  isShowMenu: boolean = false;
  isShowTime: boolean = false;
  dataSource: Menus[];
  day: string;
  columnsToDisplay = ['food', 'count'];
  expandedElement: Menus | null;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getAllMenus();
  }

  getAllMenus() {
    this.menuService.getAllMenus().subscribe((data: any[]) => {
      this.menus = (data);
    });
  }

  choiceTime(day: string) {
    this.day = day;
    this.isShowTime = true;
    this.isMainMenu = false;
    this.isShowMenu = false;
  }

  showMenu(time: string) {
    this.menuService.getAllFoodOfMenuAndDay(this.day, time, this.menuTitle).subscribe((data: any[]) => {
      this.dataSource = data;
      console.log(data);
      this.isMainMenu = false;
      this.isShowMenu = true;
      this.isShowTime = false;
    });
  }

  back() {
    this.isMainMenu = true;
    this.isShowMenu = false;
    this.isShowTime = false;
  }

}
