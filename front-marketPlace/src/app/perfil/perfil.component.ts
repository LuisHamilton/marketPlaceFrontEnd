import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from '../userInformation';
import axios from 'axios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  titlePage="Perfil"
  userInformation : UserInformation | undefined

  constructor(private router: Router) { }

  ngOnInit(): void {

    let instance = this;

    if(localStorage.getItem('authToken')==null){
      instance.router.navigate(['/']);
    }

    var config = {
      method: 'get',
      url: 'http://localhost:5151/Client/get',
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(function (response) {
      instance.userInformation = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
