import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logado : Boolean | null
  loginTipo : String | null

  @Input() titulo =""
  @Input() login ="Login"
  constructor(private router: Router) {
    this.loginTipo = localStorage.getItem('loginType');
    if(localStorage.getItem('authToken')==null){
      this.logado=false;
    }
    else{
      this.logado=true;
    }
   }

  ngOnInit(): void {
  }

  verPerfil(){
    let instance = this;

    if(this.logado==true){
      instance.router.navigate(['/perfil']);
    }
    else{
      instance.router.navigate(['/login']);
    }
  }
  verCompras(){
    let instance = this;

    if(this.logado==true){
      instance.router.navigate(['/purchases']);
    }
    else{
      instance.router.navigate(['/login']);
    }
  }
  verWishList(){
    let instance = this;

    if(this.logado==true){
      instance.router.navigate(['/wishes']);
    }
    else{
      instance.router.navigate(['/login']);
    }
  }

  deslogar()
  {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loginType');
    let instance = this;
    if(instance.router.url == '/'){
      window.location.reload();
    }else{
      instance.router.navigate(['/']);
    }
  }
}
