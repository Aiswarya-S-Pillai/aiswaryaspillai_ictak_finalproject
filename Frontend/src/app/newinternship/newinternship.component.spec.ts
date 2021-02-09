import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinternshipComponent } from './newinternship.component';

describe('NewinternshipComponent', () => {
  let component: NewinternshipComponent;
  let fixture: ComponentFixture<NewinternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewinternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
