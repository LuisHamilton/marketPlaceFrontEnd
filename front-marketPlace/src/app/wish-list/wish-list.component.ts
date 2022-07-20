import { Component, OnInit } from '@angular/core';
import { WishList } from '../wish-list';
import axios from "axios";


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishes:  Array<WishList> = []
  titlePage = "Lista de Desejos"
  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5151/WishList/get',
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

  remover(stocksId: number){
    var config = {
      method: 'delete',
      url: 'http://localhost:5151/WishList/delete/' + stocksId,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      }
    };
    axios(config)
    .then(function (response) {
       window.location.reload();
    })
    .catch(function (error) {
      alert("erro ao remover da wishlist");
    });
  }
}
