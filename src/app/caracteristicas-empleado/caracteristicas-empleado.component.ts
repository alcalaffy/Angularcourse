import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output() EmployeChar = new EventEmitter<string>();

  addCharacteristics(value: string) {
    //this.EmployeChar.emit(value);
  }
}
