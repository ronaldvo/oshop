import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
