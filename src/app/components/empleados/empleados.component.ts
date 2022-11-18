import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados!:Array<Empleado>;

  constructor(
    private _service:DepartamentosService
    ) { 
  }

  loadEmpleados():void{
    this._service.getEmpleados().subscribe(response=>{
      this.empleados = response;
    })
  }

 

  ngOnInit(): void {
    this.loadEmpleados();
  }

}
