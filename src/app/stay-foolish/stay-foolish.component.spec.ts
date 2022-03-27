import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayFoolishComponent } from './stay-foolish.component';

describe('StayFoolishComponent', () => {
  let component: StayFoolishComponent;
  let fixture: ComponentFixture<StayFoolishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayFoolishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayFoolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
