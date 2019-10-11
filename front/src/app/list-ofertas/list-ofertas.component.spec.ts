import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfertasComponent } from './list-ofertas.component';

describe('ListOfertasComponent', () => {
  let component: ListOfertasComponent;
  let fixture: ComponentFixture<ListOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
