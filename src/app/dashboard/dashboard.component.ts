import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { User } from "../user";

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [CommonModule],
    template: ` <p>dashboard works!</p> `,
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    user: User = JSON.parse(
        localStorage.getItem("airlines_user") ||
            JSON.stringify({ name: "", password: "" })
    );

    constructor(private router: Router) {}
    checkUser(user: User) {
        if (!user) this.router.navigate(["/login"]);
    }
}
