import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsultapadronComponent } from './pages/consultapadron/consultapadron.component';
import { ConsultalocalComponent } from './pages/consultalocal/consultalocal.component';
import { LocalComponent } from './pages/local/local.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PadronvacunacionComponent } from './pages/consultapadron/padronvacunacion/padronvacunacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultapadronComponent,
    ConsultalocalComponent,
    LocalComponent,
    PadronvacunacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
