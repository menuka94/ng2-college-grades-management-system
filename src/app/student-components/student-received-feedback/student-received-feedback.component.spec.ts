import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReceivedFeedbackComponent } from './student-received-feedback.component';

describe('StudentReceivedFeedbackComponent', () => {
  let component: StudentReceivedFeedbackComponent;
  let fixture: ComponentFixture<StudentReceivedFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReceivedFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReceivedFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
