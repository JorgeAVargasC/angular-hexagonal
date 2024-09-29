import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PrimeNgModule } from './prime-ng.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, PrimeNgModule],
  exports: [CommonModule, FormsModule, RouterModule, PrimeNgModule]
})
export class SharedModule {}
