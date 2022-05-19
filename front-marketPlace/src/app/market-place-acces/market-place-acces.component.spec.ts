import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceAccesComponent } from './market-place-acces.component';

describe('MarketPlaceAccesComponent', () => {
  let component: MarketPlaceAccesComponent;
  let fixture: ComponentFixture<MarketPlaceAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlaceAccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlaceAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
