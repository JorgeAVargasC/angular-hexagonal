import { Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { AuthComponent } from './auth/auth.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './dashboard/home/home.component'
import { ProductsComponent } from './dashboard/products/products.component'

export const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component: AuthComponent },
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'products',
				component: ProductsComponent
			}
		]
	},
	{ path: '404', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '404' }
]
