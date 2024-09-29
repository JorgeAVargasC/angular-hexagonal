import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { dashboardRoutes } from '../app.routes'
import { SharedModule } from '../shared/modules'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = []

  ngOnInit() {
    this.items = dashboardRoutes.map(({ path, title }) => ({
      label: `${title}`,
      routerLink: path
    }))
  }
}
