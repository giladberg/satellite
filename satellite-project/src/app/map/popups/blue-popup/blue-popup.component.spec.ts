import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePopupComponent } from './blue-popup.component';

describe('BluePopupComponent', () => {
  let component: BluePopupComponent;
  let fixture: ComponentFixture<BluePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
