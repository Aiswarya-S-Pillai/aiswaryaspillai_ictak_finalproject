import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglevacancyComponent } from './singlevacancy.component';

describe('SinglevacancyComponent', () => {
  let component: SinglevacancyComponent;
  let fixture: ComponentFixture<SinglevacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglevacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglevacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
