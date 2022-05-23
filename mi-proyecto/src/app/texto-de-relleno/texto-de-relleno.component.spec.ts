import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoDeRellenoComponent } from './texto-de-relleno.component';

describe('TextoDeRellenoComponent', () => {
  let component: TextoDeRellenoComponent;
  let fixture: ComponentFixture<TextoDeRellenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoDeRellenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoDeRellenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
