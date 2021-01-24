import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  productList:Products[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.productList= this.productService.getProduct();;
  console.log(this.productService.getProduct());
  }

}


