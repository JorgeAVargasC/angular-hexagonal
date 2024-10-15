import { NgModule } from '@angular/core'

import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { DialogModule } from 'primeng/dialog'
import { ToolbarModule } from 'primeng/toolbar'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { RatingModule } from 'primeng/rating'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectModule } from 'primeng/select'
import { ButtonModule } from 'primeng/button'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { TagModule } from 'primeng/tag'
import { CardModule } from 'primeng/card'
import { MenubarModule } from 'primeng/menubar'
import { ScrollTopModule } from 'primeng/scrolltop'
import { DrawerModule } from 'primeng/drawer'

@NgModule({
  imports: [
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    CardModule,
    MenubarModule,
    ScrollTopModule,
    DrawerModule,
    DialogModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    CardModule,
    MenubarModule,
    ScrollTopModule,
    DrawerModule
  ]
})
export class PrimeNgModule {}
