import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayHungryComponent } from './stay-hungry.component';

describe('StayHungryComponent', () => {
  let component: StayHungryComponent;
  let fixture: ComponentFixture<StayHungryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayHungryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayHungryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
