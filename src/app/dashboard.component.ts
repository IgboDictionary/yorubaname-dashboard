import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_NAME } from './config/config';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dict-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLogin = false;
  app_name = APP_NAME;

  constructor(
    public authService: AuthService,
    private router: Router,
    private titleServie: Title
  ) { }

  ngOnInit() {
    this.titleServie.setTitle('Dashboard | ' + this.app_name);
  }

  /**
   * Logout the user
   *
   * @author G-Factor
   */
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
