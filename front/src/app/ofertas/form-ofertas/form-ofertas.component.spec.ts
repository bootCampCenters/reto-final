import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfertasComponent } from './form-ofertas.component';

describe('FormOfertasComponent', () => {
  let component: FormOfertasComponent;
  let fixture: ComponentFixture<FormOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
