import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  constructor(private showAlert:ServicioEmpleadosService) { }
  empleados:Empleado[]=[
    new Empleado("David","Alcalá","Tech Lider",120000),
    new Empleado("Bubba","Alcalá","Mascota",1000),
    new Empleado("Coralia","Alcalá","Macota",1000),
    new Empleado("The little buddy","Alcalá","Macota",1000)
  ];

  addEmploye(empleado:Empleado){
    this.showAlert.showMessage("Name: "+empleado.nombre);
    this.empleados.push(empleado);
  }
  findEmployee(id:number){
    let empleado:Empleado=this.empleados[id];
    return empleado;
  }

  ActualizarEmploye(id:number,employee:Empleado){

    let empleadoModificado:Empleado=this.empleados[id];

    empleadoModificado.nombre=employee.nombre;
    empleadoModificado.apellido=employee.apellido;
    empleadoModificado.cargo=employee.cargo;
    empleadoModificado.salario=employee.salario;
    
  }

  EliminarEmployee(id:number){
    this.empleados.splice(id,1);
  }
}
