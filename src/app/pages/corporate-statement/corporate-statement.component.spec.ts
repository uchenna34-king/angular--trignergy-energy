/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateStatementComponent } from './corporate-statement.component';

describe('CorporateStatementComponent', () => {
  let component: CorporateStatementComponent;
  let fixture: ComponentFixture<CorporateStatementComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateStatementComponent ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(CorporateStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  
   

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
