import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const jwtHelper = new JwtHelperService();

  const token = authService.getToken();

  if(token && !jwtHelper.isTokenExpired(token)) {
    return true;
  } else {
    router.navigate(['/connexion'])
    return false;
  }
}






























/*
ANCIEN CODE

import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticate()) {
      return true;
    } else {
      this.router.navigate(['/connexion']);
      // alert('Veuillez vous connecter a l\'application pour accéder a cette page');
      return false;
    }
  }
}
*/
