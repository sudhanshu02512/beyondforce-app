import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHome } from './docs-home';

describe('DocsHome', () => {
  let component: DocsHome;
  let fixture: ComponentFixture<DocsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
