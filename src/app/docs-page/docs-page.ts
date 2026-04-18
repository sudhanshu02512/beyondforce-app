import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-docs-page',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule],
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.css',
})
export class DocsPage implements OnInit {
  
  htmlContent: SafeHtml = '';
  showSpinner = true;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {

      const category = params['category'];
      const page = params['page'];
      const subpage = params['subpage'];
      let url = ``;
      if(page){
        url = `web-pages/${category}/${page}/${page}.html`;
      }

      if(subpage){
        url = `web-pages/${category}/${page}/${subpage}/${subpage}.html`;
      }
      console.log("URL: ", url);

      this.http.get(url, { responseType: 'text' })
      .subscribe(html => {

        this.htmlContent =
        this.sanitizer.bypassSecurityTrustHtml(html);
        this.showSpinner = false;
      });

    });

  }
}
