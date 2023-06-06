import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartegiesDetailsComponent } from './startegies-details.component';

describe('StartegiesDetailsComponent', () => {
  let component: StartegiesDetailsComponent;
  let fixture: ComponentFixture<StartegiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartegiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartegiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
