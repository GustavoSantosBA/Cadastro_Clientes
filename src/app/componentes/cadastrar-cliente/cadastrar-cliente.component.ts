import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../model/clientes.model';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent {
  @Input() clientesData!: Clientes;
  @Input() popupVisible!: boolean;
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();

  porteDaEmpresaLookup = [
    { id: 0, name: 'Pequena' },
    { id: 1, name: 'Média' },
    { id: 2, name: 'Grande' },
  ];

  constructor(
    private service: ClientesService
  ) {

  }

  onSave() {
    if (this.clientesData.id) {
      this.service.update(this.clientesData).subscribe({
        next: (r) => {
          this.clientesData = new Clientes()
          this.onCloseModal.emit()
        }
      })
    } else {
      this.service.save(this.clientesData).subscribe({
        next: (r) => {
          this.clientesData = new Clientes()
          this.onCloseModal.emit()
        }
      })
    }
  }

  onHidde(e: boolean) {
    this.onCloseModal.emit(e)
  }

}
