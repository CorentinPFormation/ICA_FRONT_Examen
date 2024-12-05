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
  const cookieEmail = document.cookie.split('=')[2].replace('%40getyooz.com', '').replace('.', ' ');
  const cookieEmailFormated = cookieEmail.split(" ");

  for(let i = 0 ; i < cookieEmailFormated.length; i++) {
    cookieEmailFormated[i] = cookieEmailFormated[i][0].toUpperCase() + cookieEmailFormated[i].substring(1);
  }

  cookieEmailFormated.join(" ");

  console.log('TOKEN: ' + tokenA);
  console.log('EMAIL: ' + email);
  console.log('TOKEN 2: ' + tokenB);
  console.log('ALL COOKIE: ' + cookieEmail);
  console.log('UPPERCAS: ' + cookieEmailFormated.join(" "));

  if(token && !jwtHelper.isTokenExpired(token)) {
    return true;
  } else {
    router.navigate(['/connexion'])
    return false;
  }
}
