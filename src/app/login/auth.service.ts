import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  private baseApiUrl: String = 'http://www.contactapi.pl';

  private credential;

  // private credential = {
  //   login: 'admin',
  //   password: 'admin'
  // };
  isUserLoggedIn: Boolean = false;
  constructor(private http: Http) {}




  login(login: String, password: String): Observable<any> {
    this.credential = {
      email: login,
      password: password
    };
    return this.http.post(this.baseApiUrl + '/login', this.credential).map((res) => res.json());
  }
     // return new Promise((resolve, reject) => {
  //  if (
  //       login === this.credential.login &&
  //       password === this.credential.password
  //     ) {
  //       this.isUserLoggedIn = true;
  //       resolve();
  //     } else {
  //       reject();
  //     }
  //   });
// }
  // isLoggedIn() {
  //   return this.isUserLoggedIn;
  // }
}
