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
    if (localStorage.getItem('firebase:authUser:AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk:[DEFAULT]')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
