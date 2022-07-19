import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-market-place-acces',
  templateUrl: './market-place-acces.component.html',
  styleUrls: ['./market-place-acces.component.css']
})
export class MarketPlaceAccesComponent implements OnInit {
  titlePage="login"
  tipoLogin: Boolean | undefined

  constructor(private router: Router) { 
    this.tipoLogin=true;
  }

  ngOnInit(): void {
  }

  tipoClient(){
    this.tipoLogin=true;
  }
  tipoOwner(){
    this.tipoLogin=false;
  }

  checar(){
    if(this.tipoLogin==true){
      this.loginClient();
    } else if(this.tipoLogin==false){
      this.loginOwner();
    }
  }

  loginClient(){
    let user = document.getElementById("user") as HTMLInputElement;
    let passwd = document.getElementById("password") as HTMLInputElement;
    var data = JSON.stringify({
      "login": user?.value,
      "passwd": passwd?.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Client/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    let instance = this;
    axios(config)
    .then(function (response) {
      localStorage.setItem('authToken', response.data);
      localStorage.setItem('loginType', 'client');
      instance.router.navigate(['/']);
    }).catch(function (error) {
      localStorage.removeItem('authToken');
      alert("Usuário ou senha não encontrado!!");
    });
  }

  loginOwner(){
    let user = document.getElementById("user") as HTMLInputElement;
    let passwd = document.getElementById("password") as HTMLInputElement;
    var data = JSON.stringify({
      "login": user?.value,
      "passwd": passwd?.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Owner/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    let instance = this;
    axios(config)
    .then(function (response) {
      localStorage.setItem('authToken', response.data);
      localStorage.setItem('loginType', 'owner');
      instance.verificarLoja();
    }).catch(function (error) {
      localStorage.removeItem('authToken');
      alert("Usuário ou senha não encontrado!!");
    });
  }
  verificarLoja(){
    var config = {
      method: 'get',
      url: 'http://localhost:5151/Store/get',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      }
    };

    let instance = this;
    axios(config)
    .then(function (response) {
      instance.router.navigate(['/']);
    }).catch(function (error) {
      instance.router.navigate(['/storeRegister']);
    })
  }
}