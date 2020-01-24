import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetsFormComponent } from './new-pets-form.component';

describe('NewPetsFormComponent', () => {
  let component: NewPetsFormComponent;
  let fixture: ComponentFixture<NewPetsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPetsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
