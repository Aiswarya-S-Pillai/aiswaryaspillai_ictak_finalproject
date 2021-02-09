import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleinternshipComponent } from './singleinternship.component';

describe('SingleinternshipComponent', () => {
  let component: SingleinternshipComponent;
  let fixture: ComponentFixture<SingleinternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleinternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
