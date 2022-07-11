import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchases';
import axios from "axios";

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css']
})
export class PurchasesListComponent implements OnInit {
  purchases:  [Purchase] | undefined
  titlePage="COMPRAS"

  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5151/Purchase/all',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
       }
    };

    var instance = this;

    axios(config)
    .then(function (response) {
      instance.purchases = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
