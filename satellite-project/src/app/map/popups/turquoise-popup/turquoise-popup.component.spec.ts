import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurquoisePopupComponent } from './turquoise-popup.component';

describe('TurquoisePopupComponent', () => {
  let component: TurquoisePopupComponent;
  let fixture: ComponentFixture<TurquoisePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurquoisePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurquoisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
