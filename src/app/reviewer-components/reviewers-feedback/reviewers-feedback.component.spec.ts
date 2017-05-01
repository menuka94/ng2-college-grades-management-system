import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewersFeedbackComponent } from './reviewers-feedback.component';

describe('ReviewersFeedbackComponent', () => {
  let component: ReviewersFeedbackComponent;
  let fixture: ComponentFixture<ReviewersFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewersFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewersFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
