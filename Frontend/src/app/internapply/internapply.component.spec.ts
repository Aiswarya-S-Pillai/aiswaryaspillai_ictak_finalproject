import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternapplyComponent } from './internapply.component';

describe('InternapplyComponent', () => {
  let component: InternapplyComponent;
  let fixture: ComponentFixture<InternapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
