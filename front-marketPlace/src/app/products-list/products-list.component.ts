import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import axios from "axios";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:  [Product] | undefined;
  
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
      console.log(JSON.stringify(response.data));
      instance.products = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  mudarCoracao(idTag : String,idStore : Number, idProd : Number){
    console.log("Selector: "+idTag)        
    console.log("IdStore: "+idStore) 
    console.log("IdProduct: "+idProd) 
    var img = document.querySelector('#'+idTag);           
    if(img?.getAttribute("src") == "../assets/coracaoFull.png"){
      img?.setAttribute('src', '../assets/coracao.png');  
    }
    else{
      img?.setAttribute('src', '../assets/coracaoFull.png');
    }
  }
}

