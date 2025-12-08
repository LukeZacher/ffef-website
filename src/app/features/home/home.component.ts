import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';
import { ServicesPreviewComponent } from './components/services-preview/services-preview.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutPreviewComponent, ServicesPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
