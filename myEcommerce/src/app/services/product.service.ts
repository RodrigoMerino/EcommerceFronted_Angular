import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Products[] =[
    new Products(1,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',200),
    new Products(2,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',300),
    new Products(3,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',100),
    new Products(4,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',250),
    new Products(5,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',350),
    new Products(6,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',350),
    new Products(6,'Figura Anime','Figura fabricada por artesanos japoneses hace 2000 años',350),

  ]

  constructor() { }
  getProduct(){
    return this.product;
  }
}
