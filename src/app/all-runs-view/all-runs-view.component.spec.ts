import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRunsViewComponent } from './all-runs-view.component';

describe('AllRunsViewComponent', () => {
  let component: AllRunsViewComponent;
  let fixture: ComponentFixture<AllRunsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRunsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRunsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
