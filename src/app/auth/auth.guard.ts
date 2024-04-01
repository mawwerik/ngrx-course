import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AppState} from "../reducers";
import {Store, select} from "@ngrx/store";
import {isLoggedIn} from "./auth.selectors";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(isLoggedIn => {
          if (!isLoggedIn)
            this.router.navigateByUrl('/login')
        })
      )
  }
}
