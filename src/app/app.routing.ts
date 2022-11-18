import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditdepartamentosComponent } from "./components/editdepartamentos/editdepartamentos.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";

const appRoutes: Routes=[
    {path: "", component: DepartamentosComponent},
    {path: "insertar", component: InsertardepartamentoComponent},
    {path: "edit/:numero/:nombre/:localidad", component:EditdepartamentosComponent},
    {path: "delete/:id", component: DepartamentosComponent},
    {path: "empleados", component: EmpleadosComponent}
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);