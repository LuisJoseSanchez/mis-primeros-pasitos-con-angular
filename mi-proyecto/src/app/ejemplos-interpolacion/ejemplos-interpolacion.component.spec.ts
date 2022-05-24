import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosInterpolacionComponent } from './ejemplos-interpolacion.component';

describe('EjemplosInterpolacionComponent', () => {
  let component: EjemplosInterpolacionComponent;
  let fixture: ComponentFixture<EjemplosInterpolacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosInterpolacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosInterpolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
