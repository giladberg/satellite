import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasItemComponent } from './areas-item.component';

describe('AreasItemComponent', () => {
  let component: AreasItemComponent;
  let fixture: ComponentFixture<AreasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
