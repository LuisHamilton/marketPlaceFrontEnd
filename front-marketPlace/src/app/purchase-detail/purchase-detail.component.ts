import { Component, OnInit } from '@angular/core';
import { PurchaseDetail } from '../purchase-detail';
import { ActivatedRoute } from '@angular/router';
import  axios from 'axios';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  titlePage="Compra"
  purchase: PurchaseDetail | undefined

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const storeIdFromRoute = Number(routeParams.get('storeId'));

    var instance = this;

    var config = {
      method: 'get',
      url: 'http://localhost:5151/Purchase/' + String(productIdFromRoute) + '/' + String(storeIdFromRoute),
      headers: { }
    };

    axios(config)
    .then(function (response) {
      instance.purchase = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
