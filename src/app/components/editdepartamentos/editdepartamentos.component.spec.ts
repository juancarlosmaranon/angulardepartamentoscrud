import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepartamentosComponent } from './editdepartamentos.component';

describe('EditdepartamentosComponent', () => {
  let component: EditdepartamentosComponent;
  let fixture: ComponentFixture<EditdepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
