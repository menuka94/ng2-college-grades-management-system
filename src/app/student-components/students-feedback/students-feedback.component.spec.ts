import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFeedbackComponent } from './students-feedback.component';

describe('StudentsFeedbackComponent', () => {
  let component: StudentsFeedbackComponent;
  let fixture: ComponentFixture<StudentsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
