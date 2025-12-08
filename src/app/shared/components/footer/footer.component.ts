import { Component } from '@angular/core';
import { FooterContactComponent } from './footer-contact/footer-contact.component';

@Component({
  selector: 'app-footer',
  imports: [FooterContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
