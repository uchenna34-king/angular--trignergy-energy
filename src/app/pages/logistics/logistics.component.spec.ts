/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsComponent } from './logistics.component';

describe('LogisticsComponent', () => {
  let component: LogisticsComponent;
  let fixture: ComponentFixture<LogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
