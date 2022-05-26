import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-market-place-acces',
  templateUrl: './market-place-acces.component.html',
  styleUrls: ['./market-place-acces.component.css']
})
export class MarketPlaceAccesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let user = document.getElementById("user") as HTMLInputElement;
    let passwd = document.getElementById("password") as HTMLInputElement;
    var data = JSON.stringify({
      "login": user?.value,
      "passwd": passwd?.value
    });
    console.log(user.value, passwd.value)
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
      console.log(JSON.stringify(response.data));
      localStorage.setItem('authToken', response.data);
      instance.router.navigate(['/']);
    }).catch(function (error) {
      console.log(error);
      localStorage.removeItem('authToken');
    });
  }
}
