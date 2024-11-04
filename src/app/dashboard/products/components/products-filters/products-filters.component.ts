import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../shared/services'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { Router, ActivatedRoute } from '@angular/router'
import { IFindAllProductsPayload } from '../../shared/domain'
import { ChipModule } from 'primeng/chip'

type IFilterForm = FormGroup<{
  title: FormControl<string | null>
}>

@Component({
  selector: 'app-products-filters',
  standalone: true,
  templateUrl: './products-filters.component.html',
  imports: [ReactiveFormsModule, InputTextModule, ChipModule]
})
export class ProductsFiltersComponent implements OnInit {
  form: IFilterForm

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.form = this.createForm()
  }

  private createForm() {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  private loadFormFromQueryParams(): void {
    this.route.queryParams.subscribe((params: IFindAllProductsPayload) => {
      const title = params['title']
      if (title) {
        this.form.controls.title.setValue(title)
      }
    })
  }

  private suscribeToFormChanges(): void {
    this.form.valueChanges.subscribe(({ title }) => {
      this.router.navigate([], {
        queryParams: { title },
        queryParamsHandling: 'merge' // Esto mantiene otros parámetros en la URL
      })

      this.productsService
        .findAll({
          ...(title && { title })
        })
        .subscribe()
    })
  }

  ngOnInit() {
    this.loadFormFromQueryParams()
    this.suscribeToFormChanges()
  }
}
