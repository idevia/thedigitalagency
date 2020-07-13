import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeAppsComponent } from './creative-apps.component';

describe('CreativeAppsComponent', () => {
  let component: CreativeAppsComponent;
  let fixture: ComponentFixture<CreativeAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
