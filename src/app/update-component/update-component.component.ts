import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoServiceService } from '../empleado-service.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {
  constructor(private router:Router,private EmployeeService:EmpleadoServiceService,private route:ActivatedRoute){}

  ToHome(){
    this.router.navigate([""])
  }

  UpdateEmploye(){
    let empleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
    
    this.EmployeeService.ActualizarEmploye(this.index,empleado); 

    this.router.navigate([""])
  }

  DeleteEmployee(){
    this.EmployeeService.EliminarEmployee(this.index);
    this.router.navigate([""])
  }

  FlowControl(){
    if(this.option==1){
      let empleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
    
      this.EmployeeService.ActualizarEmploye(this.index,empleado); 

      this.router.navigate([""])
    }else{
      this.EmployeeService.EliminarEmployee(this.index);
      this.router.navigate([""])
    }
  }

  empleados:Empleado[]=[];
  
empleado:any;
CuadroNombre:string="";
CuadroApellido:string="";
CuadroCargo:string="";
CuadroSalario:number=0;

index:number;
option:number;

ngOnInit():void{
  parseInt(this.option=this.route.snapshot.queryParams['action']);
  this.empleados=this.EmployeeService.empleados;
  this.index=this.route.snapshot.params['id'];

  let empleado:Empleado=this.EmployeeService.findEmployee(this.index);

  this.CuadroNombre=empleado.nombre;
  this.CuadroApellido=empleado.apellido;
  this.CuadroCargo=empleado.cargo;
  this.CuadroSalario=empleado.salario;
}
}
