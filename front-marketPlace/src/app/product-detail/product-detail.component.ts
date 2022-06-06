import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../products';
import  axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  titlePage="Product Detail";
  title= 'front-marketplace';
  product : Product | undefined

  constructor(private route: ActivatedRoute) { }

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

}
