import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import menuMap from '../config/menu-map';
import { windowTop } from '../utility/utility';
import menuMap from 'app/configs/menu-configs/menu-config';
@Component({
  selector: 'app-docs-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './docs-home.html',
  styleUrl: './docs-home.css',
})
export class DocsHome implements OnInit {

  pageLabel?: string;
  pageDescription?: string;
  customPageAvailable = true;

  htmlContent: SafeHtml = '';
  menuItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    windowTop();
    this.route.params.subscribe(params => {

      const category = params['category'];
      const url = `web-pages/${category}/${category}.html`;
      const pageData = menuMap.get('/'+category);
      console.log('Page data for category', category, ':', pageData);
      this.pageLabel = pageData?.label || '';
      this.pageDescription = pageData?.description || '';
      const items = pageData?.items || [];
      this.menuItems = items;

      this.http.get(url, { responseType: 'text' })
      .subscribe(html => {
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
      });

    });

    

  }
}
