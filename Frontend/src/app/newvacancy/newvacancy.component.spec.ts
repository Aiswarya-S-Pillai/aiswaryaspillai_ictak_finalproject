import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvacancyComponent } from './newvacancy.component';

describe('NewvacancyComponent', () => {
  let component: NewvacancyComponent;
  let fixture: ComponentFixture<NewvacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
