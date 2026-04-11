import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { windowTop } from '../utility/utility';
import { MenuNode } from '@utility/menu-tree';
import { getActiveMenuConfig } from 'app/configs/menu-configs/menu-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  menu: MenuNode[] = [];

  ngOnInit() {
    windowTop();
    this.menu = getActiveMenuConfig();
  }

  hearts: any[] = [];

  showHearts() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < 15; i++) {
      const heart = {
        id: Date.now() + i,
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight,
        transform: `translate(${(Math.random() - 0.5) * 200}px, -150px)`
      };

      this.hearts.push(heart);

      setTimeout(() => {
        this.hearts = this.hearts.filter(h => h.id !== heart.id);
      }, 1200);
    }
  }

}
