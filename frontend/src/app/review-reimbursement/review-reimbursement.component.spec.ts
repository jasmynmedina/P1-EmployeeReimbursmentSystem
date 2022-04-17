import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewReimbursementComponent } from './review-reimbursement.component';

describe('ReviewReimbursementComponent', () => {
  let component: ReviewReimbursementComponent;
  let fixture: ComponentFixture<ReviewReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
