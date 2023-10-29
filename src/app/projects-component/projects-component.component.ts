import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoServiceService } from '../empleado-service.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent {
  constructor(private router:Router,private EmployeeService:EmpleadoServiceService){}

  ToHome(){
    this.router.navigate([""])
  }
  addEmploye(){
    let empleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
    
    this.EmployeeService.addEmploye(empleado); 
    this.router.navigate([""])
  }
  empleados:Empleado[]=[];
  
empleado:any;
CuadroNombre:string="";
CuadroApellido:string="";
CuadroCargo:string="";
CuadroSalario:number=0;
}

