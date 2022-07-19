import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:  Array<Product> = []
  titlePage = "MERCADO"
  produtos: Array<Product> = []
  loginTipo : String | null
  
  constructor(private router: Router) { 
    this.loginTipo = localStorage.getItem('loginType');
  }

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
      if(instance.loginTipo == 'client'){
        instance.checar();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  checar(){
    for(let produto of this.products){
      console.log(produto.storeid);
      var config = {
        method: 'get',
        url: 'http://localhost:5151/WishList/verify/' + produto.stocksid,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
          'Content-Type': 'application/json'
         }
      };
      axios(config)
      .then(function (response) {
        var img = document.querySelector('#imgCoracao' + produto.id + '_' + produto.storeid);
        img?.setAttribute('src', '../assets/coracaoFull.png');
      })
    }
  }
  mudarCoracao(idTag : String,idStore : Number, idProd : Number, idStock : number){

    if(this.loginTipo == 'client'){
      var config = {
        method: 'get',
        url: 'http://localhost:5151/WishList/verify/' + idStock,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
          'Content-Type': 'application/json'
         }
      };
      let instance = this;
      axios(config)
      .then(function (response) {
        instance.remover(idProd, idStock, idTag);
      })
      .catch(function (error) {
        instance.adicionar(idProd, idStock, idTag);
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  adicionar(idProd: Number, idStock: number, idTag: String){
    var img = document.querySelector('#'+idTag);
    var config = {
      method: 'post',
      url: 'http://localhost:5151/WishList/addProduct/' + idProd + '/' + idStock,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      }
    };
    axios(config)
    .then(function (response) {
      img?.setAttribute('src', '../assets/coracaoFull.png');
    })
    .catch(function (error) {
      img?.setAttribute('src', '../assets/coracao.png'); 
    });
  }
  remover(idProd: Number, idStock: number, idTag: String){
    var img = document.querySelector('#'+idTag);
    var config = {
      method: 'delete',
      url: 'http://localhost:5151/WishList/delete/' + idStock,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      }
    };
    axios(config)
    .then(function (response) {
      img?.setAttribute('src', '../assets/coracao.png'); 
    })
    .catch(function (error) {
      img?.setAttribute('src', '../assets/coracaoFull.png');
    });
  }
}

