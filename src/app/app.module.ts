import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxFileUploaderModule, DxFormModule, DxHtmlEditorModule, DxListModule, DxNumberBoxModule, DxPieChartModule, DxPopoverModule, DxPopupModule, DxSelectBoxModule, DxTabPanelModule, DxTextAreaModule, DxTextBoxModule, DxTooltipModule } from 'devextreme-angular';
import { DxoGridModule } from 'devextreme-angular/ui/nested';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarClienteComponent } from './componentes/cadastrar-cliente/cadastrar-cliente.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SharedComponent,
    DashboardComponent,
    CadastrarClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxFileUploaderModule,
    DxoGridModule,
    DxDataGridModule,
    DxFormModule,
    DxListModule,
    DxButtonModule,
    DxPopupModule,
    DxNumberBoxModule,
    DxDropDownBoxModule,
    DxTextAreaModule,
    DxPieChartModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTextBoxModule,
    DxHtmlEditorModule,
    DxPopoverModule,
    DxTextBoxModule,
    DxTooltipModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
