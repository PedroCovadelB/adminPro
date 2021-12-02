import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, data: { titulo: 'Main'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta'}},
      {path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas'}},
      {path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}},
      {path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica 1'}},
      {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'}},
      {path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil de usuario'}},

      // Mantenimientos
      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Matenimiento de Hospitales' }},
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Matenimiento de Medicos' }},
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Matenimiento de Medicos' }},

      //Rutas de Admin
      { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: 'Usuario de aplicación' }},
    ]    
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
