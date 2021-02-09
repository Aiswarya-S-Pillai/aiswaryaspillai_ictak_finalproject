import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternstudentComponent } from './internstudent.component';

describe('InternstudentComponent', () => {
  let component: InternstudentComponent;
  let fixture: ComponentFixture<InternstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
