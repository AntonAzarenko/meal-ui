import {Component, Input, OnInit} from '@angular/core';
import {Booker} from '../../common/domain/Booker';
import {BookerService} from '../../../services/booker.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  @Input() type: string;
  check: string;
  booker: Booker;
  constructor(private bookerService: BookerService) { }

  ngOnInit() {
  }

  addNewRecord() {
    this.booker = new Booker(this.check, this.type);
    this.bookerService.save(this.booker).subscribe();
    window.location.reload();
  }
}
