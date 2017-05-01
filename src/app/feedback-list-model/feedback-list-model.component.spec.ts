import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListModelComponent } from './feedback-list-model.component';

describe('FeedbackListModelComponent', () => {
  let component: FeedbackListModelComponent;
  let fixture: ComponentFixture<FeedbackListModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackListModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
