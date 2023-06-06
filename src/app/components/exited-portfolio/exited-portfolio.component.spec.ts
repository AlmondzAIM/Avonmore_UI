import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitedPortfolioComponent } from './exited-portfolio.component';

describe('ExitedPortfolioComponent', () => {
  let component: ExitedPortfolioComponent;
  let fixture: ComponentFixture<ExitedPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitedPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitedPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
