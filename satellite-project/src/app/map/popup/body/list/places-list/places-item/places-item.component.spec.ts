import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesItemComponent } from './places-item.component';

describe('PlacesItemComponent', () => {
  let component: PlacesItemComponent;
  let fixture: ComponentFixture<PlacesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
