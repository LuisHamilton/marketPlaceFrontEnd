import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {
  titlePage = "StoreRegister"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    let Name = document.getElementById("name") as HTMLInputElement;
    let Cnpj = document.getElementById("cnpj") as HTMLInputElement;

    var data = JSON.stringify({
      "name" : Name.value,
      "CNPJ" : Cnpj.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Store/register',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      },
      data: data
    };

    let instance = this;

    axios(config)
    .then(function (response) {
      instance.router.navigate(['/']);
    }).catch(function (error) {
      alert("Preencha todos os campos corretamente");
    });
  }
}
