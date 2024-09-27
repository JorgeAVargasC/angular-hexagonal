import { Component, OnInit } from '@angular/core'
import { ProductsService } from './shared/services/products.service'
import { IFindAllProductsResponse } from './shared/domain'
import { ProductsListComponent } from './components'
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsListComponent, ProductsFiltersComponent],
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
