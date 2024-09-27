import { HttpInterceptorFn } from '@angular/common/http'

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url
  const baseUrl = 'https://api.escuelajs.co/api/v1'
  return next(
    req.clone({
      url: `${baseUrl}/${url}`
    })
  )
}
