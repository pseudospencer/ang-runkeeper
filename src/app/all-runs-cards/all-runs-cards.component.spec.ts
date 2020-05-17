import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRunsCardsComponent } from './all-runs-cards.component';

describe('AllRunsCardsComponent', () => {
  let component: AllRunsCardsComponent;
  let fixture: ComponentFixture<AllRunsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRunsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRunsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
