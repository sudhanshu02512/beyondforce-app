import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  sunglassIcon: string = 'eyeglasses_2';

  constructor(private themeService: ThemeService) { }

  toggleReadingMode() {
    this.themeService.toggle();
    this.sunglassIcon = this.sunglassIcon === 'eyeglasses_2' ? 'eyeglasses_2_sound' : 'eyeglasses_2';
  }
  
}
