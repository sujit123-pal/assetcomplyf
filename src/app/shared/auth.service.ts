import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinalService } from '../services/application-setting/final.service';
/*
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from } from 'rxjs';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}
*/
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient,private final:FinalService) {}

  registerUrl =
    this.final.b+'registration';
  loginUrl = this.final.b+'login';

  register(user) {
    return this.http.post(this.registerUrl, user);
  }

  login(user) {
    return this.http.post(this.loginUrl, user);
  }
}
