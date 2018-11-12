import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("state", state.url);
    if (state.url === "" || state.url.indexOf("home") > -1 )
    {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
