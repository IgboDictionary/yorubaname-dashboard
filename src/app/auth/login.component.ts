import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { APP_NAME } from '../config/config';


@Component({
  selector: 'dict-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login - ' + APP_NAME);

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * Login using email and password
   *
   * @author G-Factor
   */
  onLogin() {
    this.loading = true;
    // Temporary: to be removed after JWT implementation in the backend auth module is complete
    // --------------------------------------------------------------
    localStorage.setItem('token', 'true');
    this.router.navigate([this.returnUrl]);
    this.loading = false;
    // ---------------------------------------------------------------
    // this.authService.login(this.loginForm.value)
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //       this.loading = false;
    //     },
    //     message => {
    //       this.loading = false;
    //       this.snackBar.open(message.json().message, 'Ok', {
    //         extraClasses: ['snackbar-error'],
    //         duration: 10000
    //       });
    //     }
    //   );
  }
}
