import {Component, Input, OnInit} from '@angular/core';
import {Booker} from '../../common/domain/Booker';
import {BookerService} from '../../../services/booker.service';
import {Router} from '@angular/router';
import {BookerComponent} from '../booker.component';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  @Input() type: string;
  check: string;
  booker: Booker;
  comment: string;

  constructor(private bookerService: BookerService, private bookerComponent : BookerComponent) {
  }

  ngOnInit() {
  }

  addNewRecord() {
    this.booker = new Booker(this.check, this.type);
    this.bookerService.save(this.booker).subscribe();
    window.location.reload();
  }

  back() {
    this.bookerComponent.back();
  }
}
