import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerReviewFormComponent } from './reviewer-review-form.component';

describe('ReviewerReviewFormComponent', () => {
  let component: ReviewerReviewFormComponent;
  let fixture: ComponentFixture<ReviewerReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
