import { Component, OnInit } from '@angular/core'
import { ProductsService } from './shared/services/products.service'
import {
  ProductsFiltersComponent,
  ProductsListComponent,
  ProductsModalComponent
} from './components'
import { PrimeNgModule } from '../../shared/modules'
import { IFindAllProductsPayload } from './shared/domain'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductsListComponent,
    ProductsFiltersComponent,
    PrimeNgModule,
    ProductsModalComponent
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  constructor(
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute
  ) {}

  private initialFetchFromQueryParams(): void {
    this.route.queryParams.subscribe((params: IFindAllProductsPayload) => {
      this.productsService.findAll(params).subscribe()
    })
  }

  ngOnInit() {
    this.initialFetchFromQueryParams()
  }
}
