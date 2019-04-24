import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundPurplePopupComponent } from './no-found-purple-popup.component';

describe('NoFoundPurplePopupComponent', () => {
  let component: NoFoundPurplePopupComponent;
  let fixture: ComponentFixture<NoFoundPurplePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFoundPurplePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFoundPurplePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
