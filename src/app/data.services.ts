import { HttpClient } from "@angular/common/http";
import{Injectable} from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){       }
    
    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post("https://console.firebase.google.com/project/myemployees-a91b6/database/myemployees-a91b6-default-rtdb/data/~2F?hl=es-419/datos.json",empleados);
    }
}