import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { UserAuthGuard } from '../guard/user-auth.guard'

const redirectUnauthorizedToLogin = () =>  redirectUnauthorizedTo(['/user']) ;
const redirectLoggedInToItems = () => redirectLoggedInTo(['/']);
const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash 

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule), canActivate: [UserAuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), data: { authGuardPipe: redirectLoggedInToItems } },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
    },
    { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }


