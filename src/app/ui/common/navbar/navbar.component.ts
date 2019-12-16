import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../services/token-storage.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../../services/login-info';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   isLoginIn = false;

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isLoginIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }


  reloadPage() {
    window.location.reload();
  }



  logout(){
    this.tokenStorage.signOut();
    this.isLoginIn = false;
    this.reloadPage();
  }
}
