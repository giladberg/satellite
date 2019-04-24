import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasHeaderComponent } from './areas-header.component';

describe('AreasHeaderComponent', () => {
  let component: AreasHeaderComponent;
  let fixture: ComponentFixture<AreasHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
