import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  titlePage="cadastro"
  tipoCadastro: Boolean | undefined

  constructor(private router: Router) { 
    this.tipoCadastro=true;
  }

  ngOnInit(): void {
  }

  tipoClient(){
    this.tipoCadastro=true;
    console.log("cadastrar CLiente");
  }
  tipoOwner(){
    this.tipoCadastro=false;
    console.log("cadastrar Owner");
  }
  checar(){
    if(this.tipoCadastro==true){
      this.cadastroClient();
    } else if(this.tipoCadastro==false){
      this.cadastroOwner();
    }
  }

  DadosToEndOrCadToEnd(){
    let client = document.querySelector('.formDados') as HTMLDivElement
    let address = document.querySelector('.formEndereco') as HTMLDivElement
    let end = document.querySelector('.btnFim') as HTMLDivElement

    if (!client.classList.contains('hide-component'))
      client.classList.toggle('hide-component')
    if (address.classList.contains('hide-component'))
      address.classList.toggle('hide-component')
    if (!end.classList.contains('hide-component'))
      end.classList.toggle('hide-component')
  }
  EndToCad(){
    let address = document.querySelector('.formEndereco') as HTMLDivElement
    let end = document.querySelector('.btnFim') as HTMLDivElement

    if (!address.classList.contains('hide-component'))
      address.classList.toggle('hide-component')
    if (end.classList.contains('hide-component'))
      end.classList.toggle('hide-component')
  }
  EndToDados(){
    let client = document.querySelector('.formDados') as HTMLDivElement
    let address = document.querySelector('.formEndereco') as HTMLDivElement

    if (client.classList.contains('hide-component'))
      client.classList.toggle('hide-component')
    if (!address.classList.contains('hide-component'))
      address.classList.toggle('hide-component')
  }

  cadastroClient(){
    let Name = document.getElementById("name") as HTMLInputElement;
    let Phone = document.getElementById("phone") as HTMLInputElement;
    let Email = document.getElementById("e-mail") as HTMLInputElement;
    let Login = document.getElementById("login") as HTMLInputElement;
    let Date_of_birth = document.getElementById("date_of_birth") as HTMLInputElement;
    let Password = document.getElementById("password") as HTMLInputElement;
    let Document = document.getElementById("document") as HTMLInputElement;
    let Street = document.getElementById("street") as HTMLInputElement;
    let City = document.getElementById("city") as HTMLInputElement;
    let State = document.getElementById("state") as HTMLInputElement;
    let Country = document.getElementById("country") as HTMLInputElement;
    let Postal_Code = document.getElementById("postal_code") as HTMLInputElement;

    var Address = {
      "street" : Street.value,
      "city" : City.value,
      "state" : State.value,
      "country" : Country.value,
      "postal_code" : Postal_Code.value
    }

    var data = JSON.stringify({
      "name" : Name.value,
      "phone" : Phone.value,
      "email" : Email.value,
      "login" : Login.value,
      "date_of_birth" : Date_of_birth.value,
      "passwd" : Password.value,
      "document" : Document.value,
      "address" : Address
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Client/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    let instance = this;

    axios(config)
    .then(function (response) {
      instance.router.navigate(['/login']);
    }).catch(function (error) {
      alert("Preencha todos os campos corretamente");
      console.log(error);
    });
  }

  cadastroOwner(){
    let Name = document.getElementById("name") as HTMLInputElement;
    let Phone = document.getElementById("phone") as HTMLInputElement;
    let Email = document.getElementById("e-mail") as HTMLInputElement;
    let Login = document.getElementById("login") as HTMLInputElement;
    let Date_of_birth = document.getElementById("date_of_birth") as HTMLInputElement;
    let Password = document.getElementById("password") as HTMLInputElement;
    let Document = document.getElementById("document") as HTMLInputElement;
    let Street = document.getElementById("street") as HTMLInputElement;
    let City = document.getElementById("city") as HTMLInputElement;
    let State = document.getElementById("state") as HTMLInputElement;
    let Country = document.getElementById("country") as HTMLInputElement;
    let Postal_Code = document.getElementById("postal_code") as HTMLInputElement;

    var Address = {
      "street" : Street.value,
      "city" : City.value,
      "state" : State.value,
      "country" : Country.value,
      "postal_code" : Postal_Code.value
    }

    var data = JSON.stringify({
      "name" : Name.value,
      "phone" : Phone.value,
      "email" : Email.value,
      "login" : Login.value,
      "date_of_birth" : Date_of_birth.value,
      "passwd" : Password.value,
      "document" : Document.value,
      "address" : Address
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Owner/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    let instance = this;

    axios(config)
    .then(function (response) {
      instance.router.navigate(['/login']);
    }).catch(function (error) {
      alert("Preencha todos os campos corretamente");
      console.log(error);
    });
  }
}
