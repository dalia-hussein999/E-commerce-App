import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductscontainerComponent } from './productcontainer/productcontainer.component';
import { ProuctdetailsComponent } from './productdetails/productdetails.component';
import { ProductService } from '../product.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShoppingcardComponent } from './shoppingcard/shoppingcard.component';




@NgModule({
  declarations: [
    ProductscontainerComponent,
    ProuctdetailsComponent,
    NotfoundComponent,
    ShoppingcardComponent,
    
],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [
    ProductService, 
  ],
})
export class ProductModule { }
