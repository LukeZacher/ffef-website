import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../../shared/services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  scrollService = inject(ScrollService);
}
