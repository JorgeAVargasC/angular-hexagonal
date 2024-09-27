import { Component, OnInit } from '@angular/core'
import { ProductsListComponent } from './products-list/products-list.component'
import { ProductsService } from './shared/services/products.service'
import { IFindAllProductsResponse } from './shared/domain'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.findAll()
  }

  get products(): IFindAllProductsResponse {
    return this.productsService.products
  }
}
