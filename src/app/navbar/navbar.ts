import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';
import { ResponsiveService } from 'app/services/responsive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  sunglassIcon: string = 'eyeglasses_2';
  isMobile: boolean = false;

  @Output() menuClick = new EventEmitter<void>();

  onMenuClick() {
    console.log('clicked'); // debug
    this.menuClick.emit();
  }
  
  constructor(
    private themeService: ThemeService,
    public responsive: ResponsiveService,
  ) {
    this.responsive.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }

  toggleReadingMode() {
    this.themeService.toggle();
    this.sunglassIcon =
      this.sunglassIcon === 'eyeglasses_2'
        ? 'eyeglasses_2_sound'
        : 'eyeglasses_2';
  }
}
