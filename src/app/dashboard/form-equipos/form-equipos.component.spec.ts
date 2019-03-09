import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquiposComponent } from './form-equipos.component';

describe('FormEquiposComponent', () => {
  let component: FormEquiposComponent;
  let fixture: ComponentFixture<FormEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
