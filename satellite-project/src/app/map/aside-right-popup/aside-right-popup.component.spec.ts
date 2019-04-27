import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightPopupComponent } from './aside-right-popup.component';

describe('AsideRightPopupComponent', () => {
  let component: AsideRightPopupComponent;
  let fixture: ComponentFixture<AsideRightPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRightPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRightPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
