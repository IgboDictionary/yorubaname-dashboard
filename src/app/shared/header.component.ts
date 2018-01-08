import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dict-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Logout the user & redirect back to login page
   *
   * @author G-Factor;
   */
  onLogout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

}
