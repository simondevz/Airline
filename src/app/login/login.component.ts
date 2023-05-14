import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { User } from "../user";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [CommonModule],
    template: `
        <form (submit)="onSubmit()" class="login">
            <div class="card">
                <span class="text">LOGIN</span>
                <input
                    #username
                    [(ngModel)]="username"
                    id="username"
                    class="username"
                    label="Username"
                />
                <input
                    #password
                    [(ngModel)]="password"
                    id="password"
                    class="password"
                    label="Password"
                />
                <button class="loginButton">Login</button>
            </div>
        </form>
    `,
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    constructor(private router: Router) {}
    let username: string;
    let password: string;

    onSubmit(event: any) {
        if (
            this.username === "Admin" &&
            this.password === "12345678"
        ) {
            localStorage.setItem("airlines_user", JSON.stringify(""));
            this.router.navigate(["/"]);
        }
    }
}
