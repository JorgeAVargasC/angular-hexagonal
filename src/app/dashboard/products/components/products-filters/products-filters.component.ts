import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../shared/services'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-products-filters',
  standalone: true,
  templateUrl: './products-filters.component.html',
  imports: [ReactiveFormsModule]
})
export class ProductsFiltersComponent implements OnInit {
  form: FormGroup<{
    title: FormControl<string | null>
  }>

  constructor(private productsService: ProductsService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(({ title }) => {
      this.productsService.findAll({
        ...(title && { title })
      })
    })
  }

  onSearch(value: string) {
    this.productsService.findAll({
      title: value
    })
  }
}
