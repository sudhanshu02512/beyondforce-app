import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  isMobile$;
  isTablet$;
  isDesktop$;

  constructor(private breakpoint: BreakpointObserver) {

    this.isMobile$ = this.breakpoint.observe([Breakpoints.Handset])
      .pipe(map(result => result.matches), shareReplay());

    this.isTablet$ = this.breakpoint.observe([Breakpoints.Tablet])
      .pipe(map(result => result.matches), shareReplay());

    this.isDesktop$ = this.breakpoint.observe([Breakpoints.Web])
      .pipe(map(result => result.matches), shareReplay());
  }

  // OS Detection
  get isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }

  get isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

}
