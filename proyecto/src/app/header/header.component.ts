import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//  @Output() featureSelected = new EventEmitter<string>();

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  /*onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
*/

  // tslint:disable-next-line:no-inferrable-types
  public app_name: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        //console.log(this.isLogged);
        //console.log(this.authService.getIdUSer());
      } else if(!auth){
        //console.log(this.isLogged);
        this.isLogged = false;
      }
    });
  }

  onLogoutUser() {
    this.authService.logoutUser();
    this.router.navigate(['/principal']);
  }

}