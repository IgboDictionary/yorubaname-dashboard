import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { API_URL } from '../config/config';

@Injectable()
export class AuthService {

  private jwtHelper: JwtHelper = new JwtHelper();
  private headers: Headers = new Headers();

  public jwt() {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new Headers({ 'Authorization': 'Bearer' + token });
    return new RequestOptions({ headers: headers });
  }

  constructor(private http: Http) { }

  /**
   * Get the user's details
   *
   * @author G-Factor
   */
  getUser() {
    // const user = localStorage.getItem('user');
    return this.http.get(API_URL + 'auth/user', this.jwt())
      .map((res: Response) => res.json().user);
  }

  /**
   * Request for token
   * @param formData
   *
   * @author G-Factor
   */
  login(formData) {
    return this.http.post(API_URL + 'auth/user', formData, this.jwt())
      .map((res: Response) => {
        localStorage.setItem('token', JSON.stringify(res.json().token));
        localStorage.setItem('user', JSON.stringify(res.json().user));

      });
  }

  /**
   * Send request to update users details
   * @param formData
   *
   * @author G-Factor
   */
  updateUser(formData) {
    return this.http.put(API_URL + 'auth/user', formData, this.jwt())
      .map((res: Response) => {
        const response = res.json();
        return response;
      })
      .do((response) => {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(response.user));
      });
  }

  /**
   * Send request to change users password
   * @param formData
   *
   * @author G-Factor
   */
  changePassword(formData) {
    return this.http.put(API_URL + 'auth/user/password/reset', formData, this.jwt())
      .map((res: Response) => res.json().message);
  }

  /**
   * Delete user account
   *
   * @author G-Factor
   */
  deleteAccount() {
    return this.http.delete(API_URL + 'auth/user', this.jwt())
      .map((res: Response) => res.json().message);
  }

  /**
   * Log the user out
   *
   * @author G-Factor
   */
  logout() {
    return localStorage.removeItem('token'), localStorage.removeItem('user');
  }

  /**
   * Check if user is authenticated
   *
   * @author G-Factor
   */
  isAuthenticated() {
    // return tokenNotExpired('token');
    if (localStorage.getItem('token')) {
      return true;
    }
  }
}
