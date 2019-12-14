import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthLoginInfo} from '../../../services/login-info';
import {AuthService} from '../../../services/auth.service';
import {TokenStorageService} from '../../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isLoginIn = false;

  isLoggedIn = false;
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {}

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
