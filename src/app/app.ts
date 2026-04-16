import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

import { ThemeService } from './services/theme';
import { ResponsiveService } from 'app/services/responsive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isMobile = false;

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  constructor(
    private themeService: ThemeService,
    private responsive: ResponsiveService,
  ) {
    this.responsive.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }

  isReadingMode = false;

  ngOnInit() {
    this.themeService.readingMode$.subscribe((mode) => {
      this.isReadingMode = mode;
    });
  }
}
