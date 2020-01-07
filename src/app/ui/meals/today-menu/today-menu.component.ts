import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../services/menu.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Meal} from '../../common/domain/Meal';
import {TodayMenus} from '../../common/domain/TodayMenus';

export interface TodayMenu {
  time: string;
  menuResponse: MEAL[];
}

export interface MEAL {
  food: string;
  count: string;
}

@Component({
  selector: 'app-today-menu',
  templateUrl: './today-menu.component.html',
  styleUrls: ['./today-menu.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TodayMenuComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  dataSource: TodayMenu[];
  dataSources: Meal[];
  columnsToDisplay = ['time'];
  expandedElement: TodayMenu | null;
  displayedColumns: string[] = ['food', 'count']

  ngOnInit() {
    this.getTodayMenu();
  }

  getTodayMenu() {
    this.menuService.getTodayMenu().subscribe((data: any[]) => {
      console.log(data);
      this.dataSource = (data);
    });
  }
}
