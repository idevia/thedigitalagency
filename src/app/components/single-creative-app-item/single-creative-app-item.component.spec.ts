import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCreativeAppItemComponent } from './single-creative-app-item.component';

describe('SingleCreativeAppItemComponent', () => {
  let component: SingleCreativeAppItemComponent;
  let fixture: ComponentFixture<SingleCreativeAppItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCreativeAppItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCreativeAppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
