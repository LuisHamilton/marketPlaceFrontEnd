import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddressRegisterComponent } from './address-register/address-register.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { MarketPlaceAccesComponent } from './market-place-acces/market-place-acces.component';
import { StoreRegisterComponent } from './store-register/store-register.component';
import { InitialPageComponent } from './initial-page/initial-page.component';


const routes: Routes = [  {path: '', component : ProductsListComponent},
{path: 'product/:productID/:storeID', component: ProductDetailComponent},
{path: 'login', component: MarketPlaceAccesComponent},
{path: 'address-register', component: AddressRegisterComponent},
{path: 'client-register', component: ClientRegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
