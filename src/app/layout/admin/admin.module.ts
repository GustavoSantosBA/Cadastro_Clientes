import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutCustomComponent } from 'src/app/shared/layout-custom/layout-custom.component';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { UserInfoComponent } from 'src/app/shared/user-info/user-info.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    LayoutCustomComponent,
    SideBarComponent,
    UserInfoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
