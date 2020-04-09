import { Component } from '@angular/core';
import { Empleado } from './modelo/empleado';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elPrimerCRUD';
  EmpleadoArreglo:Empleado[]=[
    {id:1, nombre: "Miguel", pais: "Vzla"},
    {id:2, nombre: "Alcira", pais: "Col"},
    {id:3, nombre: "Valeria", pais: "Esp"},
    {id:4, nombre: "Gabriel", pais: "Esp"},
  ];

  EmpleadoSelect:Empleado = new Empleado();
  

  agregarEditar(){

    if(this.EmpleadoSelect.id === 0){

      this.EmpleadoSelect.id = this.EmpleadoArreglo.length + 1;
      this.EmpleadoArreglo.push(this.EmpleadoSelect);
    }
    
    this.EmpleadoSelect = new Empleado();
  }
  editar(empleado:Empleado){
    this.EmpleadoSelect=empleado;

  }
  borrar(){
     
    if(confirm("Seguro que desea eliminar?")){

        this.EmpleadoArreglo = this.EmpleadoArreglo.filter(x => x != this.EmpleadoSelect);

        for (let i = 0; i < this.EmpleadoArreglo.length; i++) {
          this.EmpleadoArreglo[i].id=i+1;
          
        }
        this.EmpleadoSelect = new Empleado();
    }
  
  }

}
