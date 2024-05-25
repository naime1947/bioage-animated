import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.getUser() ? true : false;
    if (!isAuthenticated) {
      this.router.navigate(['/auth', 'login']);
    }
    return isAuthenticated;
  }
}
