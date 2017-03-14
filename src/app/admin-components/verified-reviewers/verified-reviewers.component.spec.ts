import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedReviewersComponent } from './verified-reviewers.component';

describe('VerifiedReviewersComponent', () => {
  let component: VerifiedReviewersComponent;
  let fixture: ComponentFixture<VerifiedReviewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedReviewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
