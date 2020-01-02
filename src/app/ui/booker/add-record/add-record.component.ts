import {Component, Input, OnInit} from '@angular/core';
import {Booker} from '../../common/domain/Booker';
import {BookerService} from '../../../services/booker.service';
import {Router} from '@angular/router';
import {BookerComponent} from '../booker.component';
import {forEachComment} from 'tslint';
import {MatSnackBar} from '@angular/material';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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
  errorMessage = '';

  constructor(private bookerService: BookerService, private bookerComponent: BookerComponent, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addNewRecord() {
    if (this.check != null) {
      this.booker = new Booker(this.check, this.type, this.comment);
      this.bookerService.save(this.booker).subscribe(
        data => {
          this.showMessage('Зaпись успешно добавлена', 'Ok');
          window.location.reload();
        },
        error => {
          this.errorMessage = error.error.message;
          this.showMessage(error.error.message, 'ERROR');
        }
      );
    } else {
      this.showMessage('Поле не может быть пустым', 'ERROR');
    }

  }

  back() {
    this.bookerComponent.back();
  }

  showMessage(message: string, status: string) {
    this.snackBar.open(message, status, {
      duration: 5000,
    });
  }
}
