import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {}

  registerUrl =
    'https://assetcomply.thinkagainlab.com/api/v1/user/registration';
  loginUrl = 'https://assetcomply.thinkagainlab.com/api/v1/user/login';

  register(user) {
    return this.http.post(this.registerUrl, user);
  }

  login(user) {
    return this.http.post(this.loginUrl, user);
  }
}
