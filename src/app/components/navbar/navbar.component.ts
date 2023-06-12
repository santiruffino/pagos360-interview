import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public auth: AuthService
  ) {}

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
