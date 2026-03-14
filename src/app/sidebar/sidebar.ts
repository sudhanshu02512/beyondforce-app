import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import menu from './menu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menu = menu;

  toggleMenu(section: any) {
    section.open = !section.open;
  }
}
