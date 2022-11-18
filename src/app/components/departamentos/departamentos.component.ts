import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ActivatedRoute, Params } from "@angular/router";
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentos!: Array<Departamento>;

  constructor(
    private _service:DepartamentosService,
    private _activeRoutes:ActivatedRoute
    ) { }

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe(response=>{
          this.departamentos = response;
        });
  }

  deleteDepartamento(id:number):void{
    this._service.delete(id.toString()).subscribe(response=>{
      this.loadDepartamentos();
    });
  }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params:Params)=>{
      if(params['id'] !=null){
        var id = parseInt(params['id']);
        this.deleteDepartamento(id);
      }
    })
    this.loadDepartamentos();
  }

}
