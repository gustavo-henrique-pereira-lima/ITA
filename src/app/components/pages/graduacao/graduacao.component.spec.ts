import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduacaoComponent } from './graduacao.component';

describe('GraduacaoComponent', () => {
  let component: GraduacaoComponent;
  let fixture: ComponentFixture<GraduacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduacaoComponent]
    });
    fixture = TestBed.createComponent(GraduacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
