import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoServiceService } from '../empleado-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor(private myService:ServicioEmpleadosService,private EmployeeService:EmpleadoServiceService){
    this.empleados=this.EmployeeService.empleados;
  }
  title = 'Lista de empleados';

  

  addEmploye(){
    let empleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
    //this.myService.showMessage("K TRANZA");
    this.EmployeeService.addEmploye(empleado);  
  }
  empleados:Empleado[]=[];
  
empleado:any;
CuadroNombre:string="";
CuadroApellido:string="";
CuadroCargo:string="";
CuadroSalario:number=0;
}
