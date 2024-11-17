import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pageTile = "Dashboard"

  ngAfterViewInit() {
    let dados = localStorage.getItem('reload')
    if (dados == 'false') {
      window.location.reload();
      localStorage.setItem('reload', 'true')
    } else{
      localStorage.setItem('reload', 'false')
    }
  }
}
