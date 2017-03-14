import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerFeedbackHistoryComponent } from './reviewer-feedback-history.component';

describe('ReviewerFeedbackHistoryComponent', () => {
  let component: ReviewerFeedbackHistoryComponent;
  let fixture: ComponentFixture<ReviewerFeedbackHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerFeedbackHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerFeedbackHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
