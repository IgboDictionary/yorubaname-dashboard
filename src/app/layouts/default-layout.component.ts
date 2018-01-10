import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { APP_NAME } from '../config/config';

@Component({
  selector: 'dict-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  isLogin = false;
  app_name = APP_NAME;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
