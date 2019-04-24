import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePopupComponent } from './aside-popup.component';

describe('AsidePopupComponent', () => {
  let component: AsidePopupComponent;
  let fixture: ComponentFixture<AsidePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
