import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgIf,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  apexOpen = true;
  lwcOpen = true;

  toggleApex(){
    this.apexOpen = !this.apexOpen;
  }

  toggleLwc(){
    this.lwcOpen = !this.lwcOpen;
  }

}