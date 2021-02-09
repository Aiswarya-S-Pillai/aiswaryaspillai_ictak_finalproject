import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinternshipComponent } from './updateinternship.component';

describe('UpdateinternshipComponent', () => {
  let component: UpdateinternshipComponent;
  let fixture: ComponentFixture<UpdateinternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
