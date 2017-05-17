import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router,
              private af: AngularFire){

  }

  isAuthenticated(){
    this.af.auth
      .subscribe(user => {
        if(user){
          return true;
        }else{
          return false;
        }
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authInfo$.map(authInfo => {
      if (!authInfo.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
      return authInfo.isLoggedIn();
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
