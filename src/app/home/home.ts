import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { windowTop } from '../utility/utility';
import { MenuNode } from '@utility/menu-tree';
import { getMenuConfig } from 'app/configs/menu-configs/menu-config';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  menu: MenuNode[] = [];
 
  ngOnInit() {
    windowTop();
    this.menu = getMenuConfig();
  }

}
