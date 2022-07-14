import { Component, OnInit } from '@angular/core';
import { WishList } from '../wish-list';
import axios from "axios";


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishes:  [WishList] | undefined
  titlePage = "Lista de Desejos"
  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5151/WishList/all',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
       }
    };

    var instance = this;

    axios(config)
    .then(function (response) {
      instance.wishes = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
