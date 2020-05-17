import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRunsStatsComponent } from './all-runs-stats.component';

describe('AllRunsStatsComponent', () => {
  let component: AllRunsStatsComponent;
  let fixture: ComponentFixture<AllRunsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRunsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRunsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
