import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'
import { Aura } from 'primeng/themes/aura'
import { SharedModule } from './shared/modules'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    })
  }

  ngOnInit() {
    this.config.ripple.set(true)
  }
}
