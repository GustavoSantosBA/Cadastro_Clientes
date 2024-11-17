import { Component } from '@angular/core';
import { AdminComponent } from 'src/app/layout/admin/admin.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  listClientes: any[] = []

  constructor(private adm: AdminComponent) {
    this.adm.pageTile = 'Dashboard'
  }

  onSelReg(e: any) { }
}
