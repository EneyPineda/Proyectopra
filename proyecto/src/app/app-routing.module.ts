import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarComponent } from './agregar/agregar.component';
const routes: Routes = [
    {
        path: '', redirectTo: '/principal', pathMatch: 'full'
    },
    {
        path: 'principal', component: PrincipalComponent
    },
    {
        path: 'agregar', component: AgregarComponent
    }    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}