import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: String = '';
  password: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.login, this.password).subscribe((user) => {
      if (user.Error) {
        this.onSubmitFailure();
      } else {
        sessionStorage.setItem('JWT', user.token);
        this.onSubmitSuccess();

      }
    });
  }

  private onSubmitSuccess() {
    this.router.navigate(['/contacts']);
  }

  private onSubmitFailure() {
    console.log('Login or password incorrect');
  }

  ngOnInit() {
    sessionStorage.removeItem('JWT');
  }
}
