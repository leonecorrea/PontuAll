import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  constructor(private router: Router, private afService: AuthService) { }

  private user;

  ngOnInit() {
    this.user = this.afService.getDataWithGoogle()
    .toPromisse()
    .then(res => res);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
