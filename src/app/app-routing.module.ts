import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultalocalComponent } from './pages/consultalocal/consultalocal.component';
import { ConsultapadronComponent } from './pages/consultapadron/consultapadron.component';
import { PadronvacunacionComponent } from './pages/consultapadron/padronvacunacion/padronvacunacion.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './pages/local/local.component';

const routes: Routes = [
  {path:'consultalocal', component: ConsultalocalComponent},
  {path: 'consultapadron', component: ConsultapadronComponent},
  {path: 'home', component: HomeComponent},
  {path: 'consultalocal/local', component: LocalComponent},
  {path: 'consultapadron/padronvacunacion', component: PadronvacunacionComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
