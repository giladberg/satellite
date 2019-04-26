import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesItemFavoriteComponent } from './places-item-favorite.component';

describe('PlacesItemFavoriteComponent', () => {
  let component: PlacesItemFavoriteComponent;
  let fixture: ComponentFixture<PlacesItemFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesItemFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesItemFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
