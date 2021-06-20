import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultalocalComponent } from './consultalocal.component';

describe('ConsultalocalComponent', () => {
  let component: ConsultalocalComponent;
  let fixture: ComponentFixture<ConsultalocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultalocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultalocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
