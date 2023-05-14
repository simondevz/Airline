import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    user: User = JSON.parse(
        localStorage.getItem("airlines_user") ||
            JSON.stringify({ name: "", password: "" })
    );

    constructor(private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.user.username !== "Admin") this.router.navigate(["/login"]);
        return false;
    }
}
