import { Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { IFindAllProductsResponse } from '../../shared/domain'

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
