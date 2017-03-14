import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerSingleStudentComponent } from './reviewer-single-student.component';

describe('ReviewerSingleStudentComponent', () => {
  let component: ReviewerSingleStudentComponent;
  let fixture: ComponentFixture<ReviewerSingleStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerSingleStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerSingleStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
