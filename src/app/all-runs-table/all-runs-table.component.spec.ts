import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRunsTableComponent } from './all-runs-table.component';

describe('AllRunsTableComponent', () => {
  let component: AllRunsTableComponent;
  let fixture: ComponentFixture<AllRunsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRunsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRunsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
