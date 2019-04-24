import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundTurquoisePopupComponent } from './no-found-turquoise-popup.component';

describe('NoFoundTurquoisePopupComponent', () => {
  let component: NoFoundTurquoisePopupComponent;
  let fixture: ComponentFixture<NoFoundTurquoisePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFoundTurquoisePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFoundTurquoisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
