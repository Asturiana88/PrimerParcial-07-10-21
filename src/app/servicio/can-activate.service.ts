import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({providedIn: 'root'})
export class CanActivateService implements CanActivate {

  constructor(private auth: AutenticacionService, private router: Router) { }
  canActivate(): boolean {
    console.log(this.auth.isLoggedIn)
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
