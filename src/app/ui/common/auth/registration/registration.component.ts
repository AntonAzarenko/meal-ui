import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../../../../services/sign-up.info';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              public router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        this.snackBar.open(error.error.message, 'ERROR', {
          duration: 5000,
        });
      }
    );
  }
}
