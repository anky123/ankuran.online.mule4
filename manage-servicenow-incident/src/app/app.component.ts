import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Role } from './models/role';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user?: User | null;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user?.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
    }
}