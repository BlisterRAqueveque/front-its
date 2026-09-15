import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const token = 'cookie.service.get("token")';

  const router = inject(Router);

  if (!token) {
    router.navigate(['unauthorized']);
    return false;
  }

  return true;
};
