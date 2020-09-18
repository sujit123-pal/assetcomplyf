import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  buttonDisabled = false;
  buttonState = '';

  constructor(
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.registerForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    this.authService.register(this.registerForm.value).subscribe(
      <Response>(data) => {
        if (data.status == '900') {
          console.log('Registration Successfull');
          this.notifications.create(
            data.message,
            'Taking you the application.',
            NotificationType.Success,
            {
              theClass: 'outline success',
              timeOut: 6000,
              showProgressBar: false,
            }
          );
          this.router.navigateByUrl('/user/login');
        } else {
          this.notifications.create(
            'Error: Registration',
            data.message,
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
      },
      (err) => {
        this.notifications.create(
          'Error',
          'Registration failed, due to unknown error.',
          NotificationType.Error,
          { theClass: 'outline danger', timeOut: 6000, showProgressBar: false }
        );
        this.buttonDisabled = false;
        this.buttonState = '';
      }
    );
  }
}
