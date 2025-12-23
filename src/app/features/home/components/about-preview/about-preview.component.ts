import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollService } from '../../../../shared/services/scroll.service';

@Component({
  selector: 'app-about-preview',
  imports: [NgOptimizedImage],
  templateUrl: './about-preview.component.html',
  styleUrl: './about-preview.component.scss',
})
export class AboutPreviewComponent {
  scrollService = inject(ScrollService);
}
