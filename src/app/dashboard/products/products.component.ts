import { Component, OnInit } from '@angular/core'
import { ProductsService } from './shared/services/products.service'
import { IFindAllProductsResponse } from './shared/domain'
import { ProductsListComponent } from './components'
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component'
import { PrimeNgModule } from '../../shared/modules'
import { ProductsModalComponent } from "./components/products-modal/products-modal.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsListComponent, ProductsFiltersComponent, PrimeNgModule, ProductsModalComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  drawer = false

  handleOpenDrawer() {
    this.drawer = true
  }

  handleCloseDrawer() {
    this.drawer = false
  }

  ngOnInit() {
    this.productsService.findAll()
  }

  get products(): IFindAllProductsResponse {
    return this.productsService.products
  }
}
