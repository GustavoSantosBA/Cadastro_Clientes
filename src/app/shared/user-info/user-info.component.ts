import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  userData = {
    userName: 'Gustavo Santos',
    imgProfileData: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp'
  }
  
  constructor(private router: Router) { }
  
  ngAfterViewInit() {
    let dados = localStorage.getItem('reload')
    if (!dados) {
      window.location.reload();
      localStorage.setItem('reload', 'true')
    }
  }

  logOut() {
    // localStorage.removeItem('sgf');
    this.router.navigateByUrl('/login')
  }
}
