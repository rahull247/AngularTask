import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public objProduct:Product[]=[
    {productId:1, productNames:"biscuit", productPrice:10.00, productCategory:"food",productQuantity:2},
    {productId:1, productNames:"tea powder", productPrice:30.00, productCategory:"tea",productQuantity:4}
    
 ]; 
 
}
