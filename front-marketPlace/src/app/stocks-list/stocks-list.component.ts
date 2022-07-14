import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import axios from "axios";


@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {
  products:  [Product] | undefined
  titlePage="stocks-list"
  
  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5151/Stock/all',
      headers: { }
    };
    
    var instance = this;

    axios(config)
    .then(function (response) {
      instance.products = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
