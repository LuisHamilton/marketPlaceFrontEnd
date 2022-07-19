import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../products';
import  axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  titlePage="Product Detail";
  title= 'front-marketplace';
  product : Product | undefined
  loginTipo : String | null
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.loginTipo = localStorage.getItem('loginType');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productID'));
    const storeIdFromRoute = Number(routeParams.get('storeID'));

    var instance = this;

    var config = {
      method: 'get',
      url: 'http://localhost:5151/Stock/' + String(productIdFromRoute) + '/' + String(storeIdFromRoute),
      headers: { }
    };

    axios(config)
    .then(function (response) {
      instance.product = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  comprar(productId: number, storeId: number, price: number){
    if(this.loginTipo == 'client'){
      let date_purchase = new Date();
      let nf = Math.floor(Math.random() * 899999) + 100000;
      let nb_cf = Math.floor(Math.random() * 899999999999) + 100000000000;

      var data = JSON.stringify({
        data_purchase: date_purchase,
        payment_type: 1,
        purchase_status: 1,
        purchase_values: price,
        number_confirmation: nb_cf,
        number_nf: nf
      });
  
      var config = {
        method: 'post',
        url: 'http://localhost:5151/Purchase/make/' + productId + '/' + storeId,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
          'Content-Type': 'application/json'
        },
        data: data,
      }
  
      axios(config)
      .then(function (response) {
        alert("Compra realizada");
      })
      .catch(function (error) {
        alert(error);
      });
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}