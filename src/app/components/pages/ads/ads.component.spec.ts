import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADSComponent } from './ads.component';

describe('ADSComponent', () => {
  let component: ADSComponent;
  let fixture: ComponentFixture<ADSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ADSComponent]
    });
    fixture = TestBed.createComponent(ADSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
