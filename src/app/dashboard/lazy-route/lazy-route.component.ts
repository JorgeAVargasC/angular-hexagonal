import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-lazy-route',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl border">Lazy-route works!</h1>`,
  styleUrl: './lazy-route.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyRouteComponent {}
