import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IFindAllProductsPayload, IFindAllProductsResponse } from '../domain'

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  products: IFindAllProductsResponse = []

  findAll(payload?: IFindAllProductsPayload) {
    const params = new HttpParams({
      fromObject: { ...payload }
    })

    this.httpClient
      .get<IFindAllProductsResponse>('products', { params })
      .subscribe((products) => (this.products = products))
  }
}
