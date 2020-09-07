import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  buttonDisabled = false;
  buttonState = '';

  constructor(
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    this.authService.login(this.loginForm.value).subscribe(
      <Response>(data) => {
        console.log(data);
        if (data.status == '900') {
          this.notifications.create(
            'Welcome',
            data.message,
            NotificationType.Success,
            {
              theClass: 'outline primary',
              timeOut: 6000,
              showProgressBar: false,
            }
          );
          this.buttonDisabled = false;
          this.buttonState = '';
          localStorage.setItem('usr_token', data.token)
          localStorage.setItem('usr_name', this.loginForm.value.username)
          this.router.navigateByUrl('/app')
        } else {
          this.notifications.create(
            'Error',
            'Login Failed:'+data.message,
            NotificationType.Error,
            {
              theClass: 'outline primary',
              timeOut: 6000,
              showProgressBar: false,
            }
          );
          this.buttonDisabled = false;
          this.buttonState = '';
        }
      },
      (err) => {
        this.notifications.create(
          'Error',
          'Login Failed, due to some error.',
          NotificationType.Error,
          {
            theClass: 'outline danger',
            timeOut: 6000,
            showProgressBar: false,
          }
        );
        this.buttonDisabled = false;
        this.buttonState = '';
      }
    );
  }
}
