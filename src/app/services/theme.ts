import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readingMode = new BehaviorSubject<boolean>(false);

  readingMode$ = this.readingMode.asObservable();

  toggle() {
    this.readingMode.next(!this.readingMode.value);
  }
}