import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  // need the map to return an observable to fulfill the interface requirement of CanActivate
  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
        return false;
      }
    }));
  }
}
