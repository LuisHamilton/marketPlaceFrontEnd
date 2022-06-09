import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  formulario: Boolean | null;

  constructor(private router: Router) {
    this.formulario = true;
   }

  ngOnInit(): void {
  }

  continuar(){
    this.formulario = false;
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

    var data = JSON.stringify({
      "name" : Name.value,
      "phone" : Phone.value,
      "email" : Email.value,
      "login" : Login.value,
      "date_of_birth" : Date_of_birth.value,
      "password" : Password.value,
      "document" : Document.value,
      "address" : null
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
      console.log(JSON.stringify(response.data));
      instance.router.navigate(['/address-register']);
    });
  }
}
