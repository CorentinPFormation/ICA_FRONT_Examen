import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const CustomInteropGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.customInteropAccess()
}
