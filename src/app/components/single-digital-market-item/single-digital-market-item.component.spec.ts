import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDigitalMarketItemComponent } from './single-digital-market-item.component';

describe('SingleDigitalMarketItemComponent', () => {
  let component: SingleDigitalMarketItemComponent;
  let fixture: ComponentFixture<SingleDigitalMarketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDigitalMarketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDigitalMarketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
