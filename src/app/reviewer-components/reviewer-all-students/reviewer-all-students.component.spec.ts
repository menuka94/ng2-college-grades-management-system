import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerAllStudentsComponent } from './reviewer-all-students.component';

describe('ReviewerAllStudentsComponent', () => {
  let component: ReviewerAllStudentsComponent;
  let fixture: ComponentFixture<ReviewerAllStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerAllStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
