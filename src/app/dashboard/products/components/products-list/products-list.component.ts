import { Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { IFindAllProductsResponse } from '../../shared/domain'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ImageModule } from 'primeng/image'

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgOptimizedImage, CardModule, ButtonModule, ImageModule],
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  @Input()
  products: IFindAllProductsResponse = []
}
