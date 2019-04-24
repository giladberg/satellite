import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplePopupComponent } from './purple-popup.component';

describe('PurplePopupComponent', () => {
  let component: PurplePopupComponent;
  let fixture: ComponentFixture<PurplePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
