import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ProductObj } from '../productObj';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  titlePage = "AddProduct"
  product: ProductObj | undefined

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastroProduct(){
    let Name = document.getElementById("name") as HTMLInputElement;
    let BarCode = document.getElementById("bar_Code") as HTMLInputElement;
    let Image = document.getElementById("img") as HTMLInputElement;
    let Description = document.getElementById("description") as HTMLInputElement;

    var data = JSON.stringify({
      name : Name.value,
      bar_code: BarCode.value,
      image: Image.value,
      description: Description.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Product/register',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      },
      data: data
    };

    let instance = this;

    axios(config)
    .then(function (response) {
      instance.product = {
        bar_code: BarCode.value,
        name: Name.value,
        image: Image.value,
        description: Description.value
      };
      instance.cadastroStock();
    }).catch(function (error) {
      alert("Preencha todos os campos corretamente");
    });
  }
  cadastroStock(){
    let Quantity = document.getElementById("quantity") as HTMLInputElement;
    let Price = document.getElementById("price") as HTMLInputElement;

    let instance = this;

    var data = JSON.stringify({
      quantity: Quantity.value,
      unit_price: Price.value,
      product:{
        name: instance.product?.name,
        bar_code: instance.product?.bar_code,
        image: instance.product?.image,
        description: instance.product?.description
      }
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5151/Stock/register',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
    .then(function (response) {
      instance.router.navigate(['/stocks']);
    }).catch(function (error) {
      alert("Preencha todos os campos corretamente");
    });
  }
}
