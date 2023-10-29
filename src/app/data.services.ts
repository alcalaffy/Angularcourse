import { HttpClient } from "@angular/common/http";
import{Injectable} from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){       }
    
    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post("https://myemployees-a91b6-default-rtdb.firebaseio.com/datos.json",empleados).subscribe({
            next: (v) => console.log('Se han guardado los empleados ' + v),
            error: (e) => console.log('Error' + e),
          });
    }
}