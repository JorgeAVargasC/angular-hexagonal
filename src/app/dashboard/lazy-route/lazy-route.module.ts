import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LazyRouteComponent } from './lazy-route.component'

const routes: Routes = [
  {
    path: '',
    component: LazyRouteComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LazyRouteModule {}
