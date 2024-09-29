import { Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { AuthComponent } from './auth/auth.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './dashboard/home/home.component'
import { ProductsComponent } from './dashboard/products/products.component'

export const dashboardRoutes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductsComponent
  }
]

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboardRoutes
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
]
