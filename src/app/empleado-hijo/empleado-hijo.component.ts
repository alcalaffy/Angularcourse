import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})

export class EmpleadoHijoComponent {
  constructor(private myService:ServicioEmpleadosService){}

  @Input()empleado:Empleado;
  @Input()index:number;

  Characteristic = [""];

  addCharacteristic(newCharacteristic: string) {
    this.myService.showMessage("newCharacteristic");
    this.Characteristic.push(newCharacteristic);
  }
}
