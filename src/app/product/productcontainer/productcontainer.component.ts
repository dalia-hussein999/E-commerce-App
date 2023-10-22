import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../product.service';
import { count } from 'rxjs';
import { CounterService } from 'src/app/counter.service';




@Component({
  selector: 'app-productscontainer',
  templateUrl: './productcontainer.component.html',
  styleUrls: ['./productcontainer.component.css']
})
 export class ProductscontainerComponent{
  products !: Product[];
  

  constructor(private productService : ProductService,
    private counterService : CounterService){}
  ngOnInit(){
    this.productService.getProductList().subscribe(
      (data : any) => this.products = data.products
    )
  }
  addProduct(productId : number){
  
console.log('clicked');
this.counterService.incrementCounter();
  
  }
 }
