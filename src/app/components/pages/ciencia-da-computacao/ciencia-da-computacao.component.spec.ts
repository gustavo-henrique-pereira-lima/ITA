import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaDaComputacaoComponent } from './ciencia-da-computacao.component';

describe('CienciaDaComputacaoComponent', () => {
  let component: CienciaDaComputacaoComponent;
  let fixture: ComponentFixture<CienciaDaComputacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CienciaDaComputacaoComponent]
    });
    fixture = TestBed.createComponent(CienciaDaComputacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
