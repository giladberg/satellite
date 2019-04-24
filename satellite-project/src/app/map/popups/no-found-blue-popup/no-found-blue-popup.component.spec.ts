import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundBluePopupComponent } from './no-found-blue-popup.component';

describe('NoFoundBluePopupComponent', () => {
  let component: NoFoundBluePopupComponent;
  let fixture: ComponentFixture<NoFoundBluePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFoundBluePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFoundBluePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
