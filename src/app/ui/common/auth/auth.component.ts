import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthLoginInfo} from '../../../services/login-info';
import {AuthService} from '../../../services/auth.service';
import {TokenStorageService} from '../../../services/token-storage.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginIn = false;
  isShowProgressBar = false;

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  data: any;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isLoginIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    this.isShowProgressBar = true;
    this.loginInfo = new AuthLoginInfo(this.form.value.username, this.form.value.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getAuthorities();
        this.isShowProgressBar = false;
        this.isLoggedIn = true;

        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.snackBar.open(error.error.message, 'ERROR', {
          duration: 5000,
        });
        this.isLoggedIn = false;
        this.isLoginIn = false;
        this.isShowProgressBar = false;
      }
    );
    //this.router.navigateByUrl('/booker');
  }

  reloadPage() {
    window.location.reload();
    this.isLoginIn = true;
  }
}
