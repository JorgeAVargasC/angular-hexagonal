import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-products-modal',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule],
  templateUrl: 'products-modal.component.html'
})
export class ProductsModalComponent {
  visible = false

  showDialog() {
    this.visible = true
  }

  hideDialog() {
    this.visible = false
  }
}
