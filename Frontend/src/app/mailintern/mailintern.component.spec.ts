import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailinternComponent } from './mailintern.component';

describe('MailinternComponent', () => {
  let component: MailinternComponent;
  let fixture: ComponentFixture<MailinternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailinternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
