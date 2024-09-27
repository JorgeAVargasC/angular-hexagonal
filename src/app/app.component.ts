import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { PrimeNGConfig } from 'primeng/api'
import { Aura } from 'primeng/themes/aura'
import { FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { DialogModule } from 'primeng/dialog'
import { ToolbarModule } from 'primeng/toolbar'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { RatingModule } from 'primeng/rating'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectModule } from 'primeng/select'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { ButtonModule } from 'primeng/button'
import { TagModule } from 'primeng/tag'
import { ProductsListComponent } from './dashboard/products/components'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ProductsListComponent,
    FormsModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TagModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    })
  }

  ngOnInit() {
    this.config.ripple.set(true)
  }
}
