import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleLayoutComponent } from './layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout.component';
import { Error404Component } from './error/error-404/error-404.component';
import { LoadInicialComponent } from './layout/load-inicial/load-inicial.component';
import { AuthGuard } from './shared';

const APP_ROUTES: Routes = [
  {
    path: 'dashboard', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' } ]
  },
  {
    path: 'settings', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './settings/settings.module#SettingsModule' } ]
  },
  {
    path: 'minhas-rotas', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './minhas-rotas/minhas-rotas.module#MinhasRotasModule' } ]
  },
  {
    path: 'profile', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './profile/profile.module#ProfileModule' } ]
  },
  {
    path: 'transacoes', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './transacoes/transacoes.module#TransacoesModule' } ]
  },
  {
    path: 'about', component: SimpleLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './about/about.module#AboutModule' } ]
  },
  {
    path: 'welcome', component: FullLayoutComponent, canActivate: [AuthGuard],
    children: [ { path: '', loadChildren: './welcome/welcome.module#WelcomeModule' } ]
  },
  {
    path: 'home', component: SimpleLayoutComponent,
    children: [ { path: '', loadChildren: './home/home.module#HomeModule' } ]
  },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupModule' },
  { path: 'forgot-password', loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordModule'},
  { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  { path: 'error', component: Error404Component },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
