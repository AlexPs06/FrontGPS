import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealUnidadesComponent } from './real-unidades.component';

describe('RealUnidadesComponent', () => {
  let component: RealUnidadesComponent;
  let fixture: ComponentFixture<RealUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
