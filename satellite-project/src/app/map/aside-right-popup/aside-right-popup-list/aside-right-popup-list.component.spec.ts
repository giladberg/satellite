import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightPopupListComponent } from './aside-right-popup-list.component';

describe('AsideRightPopupListComponent', () => {
  let component: AsideRightPopupListComponent;
  let fixture: ComponentFixture<AsideRightPopupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRightPopupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRightPopupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
