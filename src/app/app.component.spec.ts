import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { ToastrModule } from 'ngx-toastr';

import { DroppableModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FooterComponent],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        NtkmeButtonModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-center',
          newestOnTop: false,
        }),
        DroppableModule,
      ],
    }).compileComponents();
  }));

  it('should render a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Angular Droppable',
    );
  }));
});
