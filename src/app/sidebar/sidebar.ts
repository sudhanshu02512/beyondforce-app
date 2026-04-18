import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { MenuNode } from '@utility/menu-tree';
import { getActiveMenuConfig } from 'app/configs/menu-configs/menu-config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  menuConfigSource : MenuNode[] = [];
  menuChildrenAccessor = (node: MenuNode) => node.items ?? [];
  menuHasChild = (_: number, node: MenuNode) => !!node.items && node.items.length > 0;

  ngOnInit() {
    this.menuConfigSource = getActiveMenuConfig();
  }
  @Output() treeNodeClick = new EventEmitter<void>();

  onTreeNodeClick(){
    this.treeNodeClick.emit();
  }

}
