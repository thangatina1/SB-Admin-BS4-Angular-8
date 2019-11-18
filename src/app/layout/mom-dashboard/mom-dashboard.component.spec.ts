import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomDashboardComponent } from './mom-dashboard.component';

describe('MomDashboardComponent', () => {
  let component: MomDashboardComponent;
  let fixture: ComponentFixture<MomDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
