import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('firebase:authUser:AIzaSyDIHgJJuJrbeTiVnR8h2d0yKRKuPHZVgeo:[DEFAULT]')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
