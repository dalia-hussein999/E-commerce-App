import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient: HttpClient) { }

  getProductList () : Observable<Product[]>{
    return this.httpClient.get<Product[]>(`https://dummyjson.com/products` , {
     
    })
  }
  getProductDetails (id: number): Observable<Product> {
    return this.httpClient.get<Product>(`https://dummyjson.com/products/${id}`)
  }
}