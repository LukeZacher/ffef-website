import { Component, inject } from '@angular/core';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [FooterContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrollService = inject(ScrollService);
  currentYear: number = new Date().getFullYear();
}
