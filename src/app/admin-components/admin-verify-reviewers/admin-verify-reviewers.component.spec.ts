import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerifyReviewersComponent } from './admin-verify-reviewers.component';

describe('AdminVerifyReviewersComponent', () => {
  let component: AdminVerifyReviewersComponent;
  let fixture: ComponentFixture<AdminVerifyReviewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerifyReviewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerifyReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
