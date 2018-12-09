import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { AgregarActionsComponent } from './agregar/agregar-actions/agregar-actions.component';
import { AgregarListComponent } from './agregar/agregar-list/agregar-list.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// service
import { ItemsService } from './services/items.service';
import { SugerenciasComponent } from './principal/sugerencias/sugerencias.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    AgregarComponent,
    LoginComponent,
    SecondComponent,
    AgregarActionsComponent,
    AgregarListComponent,
    SugerenciasComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
