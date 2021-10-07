import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContainerComponent } from './detalle-container.component';

describe('DetalleContainerComponent', () => {
  let component: DetalleContainerComponent;
  let fixture: ComponentFixture<DetalleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
