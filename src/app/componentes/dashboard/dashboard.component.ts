import { Component } from '@angular/core';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../model/clientes.model';
import { PorteDaEmpresa } from '../model/porte-da-empresa.enum';
import { SweetAlertService } from '../services/sweet-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  popUpVisible: boolean = false;
  cliente = new Clientes()

  listClientes: Clientes[] = []
  panoramaData: any[] = []

  porteDaEmpresaLookup = [
    { value: 0, name: 'Pequena' },
    { value: 1, name: 'Média' },
    { value: 2, name: 'Grande' },
  ];

  constructor(
    private adm: AdminComponent,
    private messageService: SweetAlertService,
    private spinner: NgxSpinnerService,
    private service: ClientesService
  ) {
    this.onDelete = this.onDelete.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.adm.pageTile = 'Cadastro de Clientes'
  }

  ngOnInit(): void {
    this.getInitialData()
  }


  getInitialData() {
    this.service.getAll().subscribe({
      next: (r) => {
        this.listClientes = r
        this.panoramaData = this.agruparPorPorte(r)
      }
    })
  }

  onSelReg(e: any) { }

  agruparPorPorte(empresas: any[]): any[] {
    return Object.values(
      empresas.reduce((acc, empresa) => {
        const porte = empresa.porteDaEmpresa;
        acc[porte] = acc[porte] || { porteDaEmpresa: porte, quantidade: 0 };
        acc[porte].quantidade++;
        return acc;
      }, {})
    );
  }

  getPorteDaEmpresaName(data: any) {
    return this.porteDaEmpresaLookup.find(o => o.value == data)?.name
  };

  newCliente() {
    this.cliente = new Clientes()
    this.popUpVisible = true;
  }

  closeModal() {
    this.getInitialData()
    this.popUpVisible = false;
  }

  onDelete(e: any) {
    this.messageService.confirm('Excluir', `Deseja excluir o cliente ${e.row.data.nomeEmpresa} ?`, () => {
      this.spinner.show()
      this.service.delete(e.row.data.id).subscribe({
        next: (r) => {
          this.getInitialData()          
          this.spinner.hide()
        },
        error: (err) => {
          this.spinner.hide()
        }
      })
    }, 'Excluir', true)
  }

  onEdit(e: any) {
    this.cliente = e.row.data
    this.popUpVisible = true;
  }

}
