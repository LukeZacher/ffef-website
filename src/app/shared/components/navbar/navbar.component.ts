import { Component, ElementRef, inject, HostListener } from '@angular/core';
import { RouterLink, Scroll } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrollService = inject(ScrollService);
  private elementRef = inject(ElementRef);

  ngAfterViewInit() {
    // In case content affects height after view initialization
    this.setNavbarHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setNavbarHeight();
  }

  private setNavbarHeight() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${navbarHeight}px`
      );
    }
  }
}
