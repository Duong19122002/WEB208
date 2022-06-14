import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  products!: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id);
    })
  }

}
