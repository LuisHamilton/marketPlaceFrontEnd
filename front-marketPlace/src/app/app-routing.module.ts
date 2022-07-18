import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SalesListComponent } from './sales-list/sales-list.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [  {path: '', component : ProductsListComponent},
{path: 'product/:productID/:storeID', component: ProductDetailComponent},
{path: 'login', component: MarketPlaceAccesComponent},
{path: 'address-register', component: AddressRegisterComponent},
{path: 'client-register', component: ClientRegisterComponent},
{path: 'perfil', component: PerfilComponent},
{path: 'purchases', component: PurchasesListComponent},
{path: 'purchase/:productId/:storeId', component: PurchaseDetailComponent},
{path: 'sales', component: SalesListComponent},
{path: 'stocks', component: StocksListComponent},
{path: 'wishes', component: WishListComponent},
{path: 'addProduct', component: AddProductComponent},
{path: 'storeRegister', component: StoreRegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
