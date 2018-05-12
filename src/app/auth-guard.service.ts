import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ConnectionService } from './connection.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  rootURL: string;

  constructor(private router: Router, private connectionService: ConnectionService) { }

  canActivate()
  {
    if (this.connectionService.isAuthenticated())
    {
      return true;
    }
    
    this.router.navigate(['/']);
    return false;
  }

  
}
