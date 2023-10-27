import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDeAvisoComponent } from './pag-de-aviso.component';

describe('PagDeAvisoComponent', () => {
  let component: PagDeAvisoComponent;
  let fixture: ComponentFixture<PagDeAvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagDeAvisoComponent]
    });
    fixture = TestBed.createComponent(PagDeAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
