import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddressRegisterComponent } from './address-register/address-register.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { MarketPlaceAccesComponent } from './market-place-acces/market-place-acces.component';
import { StoreRegisterComponent } from './store-register/store-register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductDetailComponent,
    AddressRegisterComponent,
    ClientRegisterComponent,
    MarketPlaceAccesComponent,
    StoreRegisterComponent,
    PerfilComponent,
    PurchasesListComponent,
    PurchaseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
