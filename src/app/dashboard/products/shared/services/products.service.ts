import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IFindAllProductsPayload, IFindAllProductsResponse } from '../domain'
import { Observable, BehaviorSubject, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly productsSubject = new BehaviorSubject<IFindAllProductsResponse>([])
  products$ = this.productsSubject.asObservable()

  constructor(private readonly httpClient: HttpClient) {}

  findAll(payload?: IFindAllProductsPayload): Observable<IFindAllProductsResponse> {
    const params = new HttpParams({ fromObject: { ...payload } })

    return this.httpClient.get<IFindAllProductsResponse>('products', { params }).pipe(
      tap((products) => this.productsSubject.next(products)),
      catchError((error) => {
        console.error('Error fetching products', error)
        return of([])
      })
    )
  }
}
