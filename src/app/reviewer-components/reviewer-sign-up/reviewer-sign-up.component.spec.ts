import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerSignUpComponent } from './reviewer-sign-up.component';

describe('ReviewerSignUpComponent', () => {
  let component: ReviewerSignUpComponent;
  let fixture: ComponentFixture<ReviewerSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
