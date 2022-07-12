import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchases';
import axios from "axios";

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  purchases:  [Purchase] | undefined
  titlePage="VENDAS"

  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5151/Purchase/allsales' ,
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
