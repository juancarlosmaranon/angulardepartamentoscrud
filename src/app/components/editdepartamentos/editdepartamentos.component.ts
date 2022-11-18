import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdepartamentos',
  templateUrl: './editdepartamentos.component.html',
  styleUrls: ['./editdepartamentos.component.css']
})
export class EditdepartamentosComponent implements OnInit {

  public departamento!:Departamento;

  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service: DepartamentosService,
    //PARA RECIBIR PARAMETROS
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  modificarDepartamento():void{
    var nom = this.cajaNombre.nativeElement.value;
    var loc = this.cajaLocalidad.nativeElement.value;
    //MODIFICAMOS LOS DATOS DEL DEPARTAMENTO
    //CON LOS DATOS DE LAS CAJAS
    this.departamento.nombre = nom;
    this.departamento.localidad = loc;
    this._service.modificar(this.departamento).subscribe(response=>{
      this._router.navigate(["/"]);
    })

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params)=>{
      var num = parseInt(params['numero']);
      this.departamento = new Departamento(num,params["nombre"],params["localidad"]);
    })
  }

}
