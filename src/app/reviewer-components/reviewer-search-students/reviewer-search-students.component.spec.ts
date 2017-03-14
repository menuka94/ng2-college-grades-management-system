import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerSearchStudentsComponent } from './reviewer-search-students.component';

describe('ReviewerSearchStudentsComponent', () => {
  let component: ReviewerSearchStudentsComponent;
  let fixture: ComponentFixture<ReviewerSearchStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerSearchStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerSearchStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
