import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesHeaderComponent } from './places-header.component';

describe('PlacesHeaderComponent', () => {
  let component: PlacesHeaderComponent;
  let fixture: ComponentFixture<PlacesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
