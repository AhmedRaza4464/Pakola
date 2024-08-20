import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backtotop.component.html',
  styleUrl: './backtotop.component.css'
})
export class BacktotopComponent {

  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
