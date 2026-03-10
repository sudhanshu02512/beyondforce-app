import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-viewer.html'
})
export class PageViewer implements OnInit {

  htmlContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {

      const category = params['category'];
      const page = params['page'];

      const url =
      `web-pages/${category}/${page}/${page}.html`;

      this.http.get(url, { responseType: 'text' })
      .subscribe(html => {

        this.htmlContent =
        this.sanitizer.bypassSecurityTrustHtml(html);

      });

    });

  }

}