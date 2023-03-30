import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBreakfastComponent } from './btn-breakfast.component';

describe('BtnBreakfastComponent', () => {
  let component: BtnBreakfastComponent;
  let fixture: ComponentFixture<BtnBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBreakfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
