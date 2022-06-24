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

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
  checar(){
    let client = document.getElementById('#radClient') as HTMLInputElement;
    let owner = document.getElementById('#radOwner') as HTMLInputElement;
    if(client.checked){
      this.loginClient();
    } else if(owner.checked){
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
      instance.router.navigate(['/']);
    }).catch(function (error) {
      localStorage.removeItem('authToken');
      alert("Usuário ou senha não encontrado!!");
    });
  }
}
