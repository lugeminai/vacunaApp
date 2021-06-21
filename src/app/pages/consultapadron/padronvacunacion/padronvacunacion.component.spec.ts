import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadronvacunacionComponent } from './padronvacunacion.component';

describe('PadronvacunacionComponent', () => {
  let component: PadronvacunacionComponent;
  let fixture: ComponentFixture<PadronvacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadronvacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadronvacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
