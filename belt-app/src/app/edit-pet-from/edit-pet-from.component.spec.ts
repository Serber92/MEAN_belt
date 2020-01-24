import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetFromComponent } from './edit-pet-from.component';

describe('EditPetFromComponent', () => {
  let component: EditPetFromComponent;
  let fixture: ComponentFixture<EditPetFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPetFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
