import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logado : Boolean | null

  @Input() titulo =""
  @Input() login ="Login"
  constructor(private router: Router) {
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
      alert("não implementado");
    }
    else{
      instance.router.navigate(['/login']);
    }
  }
  verCompras(){
    let instance = this;

    if(this.logado==true){
      alert("não implementado");
    }
    else{
      instance.router.navigate(['/login']);
    }
  }
  verWishList(){
    let instance = this;

    if(this.logado==true){
      alert("não implementado");
    }
    else{
      instance.router.navigate(['/login']);
    }
  }

  deslogar()
  {
    localStorage.removeItem('authToken');
    window.location.reload();
  }
}
