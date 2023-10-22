import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-prouctdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProuctdetailsComponent {
  id !: 0;
  details : Product = {
    "id": 0,
    "title": "",
    "description": "",
    "price": 0,
    "discountPercentage": 0,
    "rating": 0,
    "stock": 0,
    "brand": "",
    "category": "",
    "thumbnail": "",
    "images": [],
    "createdAt": ""
};
  constructor(private activatedRoute: ActivatedRoute,
   private productService : ProductService) {}

  ngOnInit() {
     
    this.productService
      .getProductDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((data:any) => this.details = data);
  }
}
