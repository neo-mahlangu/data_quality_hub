import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStaticDataComponent } from './api-static-data.component';

describe('ApiStaticDataComponent', () => {
  let component: ApiStaticDataComponent;
  let fixture: ComponentFixture<ApiStaticDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStaticDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiStaticDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
