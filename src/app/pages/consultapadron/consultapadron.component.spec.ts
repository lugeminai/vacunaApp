import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapadronComponent } from './consultapadron.component';

describe('ConsultapadronComponent', () => {
  let component: ConsultapadronComponent;
  let fixture: ComponentFixture<ConsultapadronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultapadronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultapadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
