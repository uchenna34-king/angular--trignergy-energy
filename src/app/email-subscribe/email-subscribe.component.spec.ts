import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubscribeComponent } from './email-subscribe.component';

describe('EmailSubscribeComponent', () => {
  let component: EmailSubscribeComponent;
  let fixture: ComponentFixture<EmailSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
