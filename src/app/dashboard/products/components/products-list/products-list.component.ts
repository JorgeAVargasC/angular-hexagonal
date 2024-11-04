import { Component, OnInit } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { IFindAllProductsResponse } from '../../shared/domain'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ImageModule } from 'primeng/image'
import { ProductsService } from '../../shared/services'
import { PrimeNgModule } from '../../../../shared/modules'

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgOptimizedImage, CardModule, ButtonModule, ImageModule, PrimeNgModule],
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  products: IFindAllProductsResponse = []

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.products$.subscribe((products) => {
      this.products = products
    })
  }
}
