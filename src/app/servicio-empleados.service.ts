import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }
  showMessage(mensaje:string){
    alert(mensaje);
  }
}
