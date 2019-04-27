import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightPopupItemComponent } from './aside-right-popup-item.component';

describe('AsideRightPopupItemComponent', () => {
  let component: AsideRightPopupItemComponent;
  let fixture: ComponentFixture<AsideRightPopupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRightPopupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRightPopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
