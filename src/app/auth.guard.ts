import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const jwtHelper = new JwtHelperService();

  const token = authService.getToken();

  const tokenA = document.cookie.split(';').find(row => row.startsWith('ica_tk'))?.split('=')[1];
  const email = document.cookie.split(';').find(row => row.startsWith('ica_em'))?.split('=')[1];
  const tokenB = document.cookie.split(';').find(row => row.startsWith('tokenn'))?.split('=')[1];
  const allCookie = document.cookie.split('=')[2].replace('%40getyooz.com', '').replace('.', ' ');
  const totoCookie = allCookie.split(" ");

  for(let i = 0 ; i < totoCookie.length; i++) {
    totoCookie[i] = totoCookie[i][0].toUpperCase() + totoCookie[i].substring(1);
  }

  totoCookie.join(" ");

  console.log('TOKEN: ' + tokenA);
  console.log('EMAIL: ' + email);
  console.log('TOKEN 2: ' + tokenB);
  console.log('ALL COOKIE: ' + allCookie);
  console.log('UPPERCAS: ' + totoCookie.join(" "));

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
