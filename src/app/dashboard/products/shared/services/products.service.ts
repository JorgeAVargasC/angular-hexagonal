import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IFindAllProductsResponse } from '../domain'

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  public products: IFindAllProductsResponse = []

  findAll() {
    this.httpClient
      .get<IFindAllProductsResponse>('products')
      .subscribe((products) => {
        console.log(products)
        this.products = products
      })
  }
}
