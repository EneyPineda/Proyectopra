import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
=======
import { AgregarComponent } from './agregar/agregar.component';
>>>>>>> 43a482a1413b8fac649d757b3314aa970c50d5c5

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
<<<<<<< HEAD
    EstadisticasComponent
=======
    AgregarComponent
>>>>>>> 43a482a1413b8fac649d757b3314aa970c50d5c5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
