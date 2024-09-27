import { Component, Input } from '@angular/core'
import { IFindAllProductsResponse } from '../shared/domain'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  @Input()
  products: IFindAllProductsResponse = []
}
