import {Component, Input, OnInit} from '@angular/core';
import {BookerService} from '../../../services/booker.service';
import {BookerComponent} from '../booker.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface OutcomeInterface {
  date: string;
  type: string;
  price: string;
  comment: string
  icon: string;
}

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OutcomeComponent implements OnInit {
  @Input() month: number;
  @Input() year: number;
  constructor(private  bookerService: BookerService, private bookerComponent: BookerComponent) {
  }
  dataSource: OutcomeInterface[];
  columnsToDisplay = ['date', 'price'];
  expandedElement: OutcomeInterface | null;

  ngOnInit() {
    this.getOutcome();
  }

  getOutcome() {
    this.bookerService.getOutcome(this.year, this.month).subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }

  back() {
    this.bookerComponent.back();
  }
}
