import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReferenceDataComponent } from './all-reference-data.component';

describe('AllReferenceDataComponent', () => {
  let component: AllReferenceDataComponent;
  let fixture: ComponentFixture<AllReferenceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReferenceDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReferenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
