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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastro(){
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
      alert("Erro no cadastro");
      console.log(error);
    });
  }
}
