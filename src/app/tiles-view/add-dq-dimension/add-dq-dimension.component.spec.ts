import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDqDimensionComponent } from './add-dq-dimension.component';

describe('AddDqDimensionComponent', () => {
  let component: AddDqDimensionComponent;
  let fixture: ComponentFixture<AddDqDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDqDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDqDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
