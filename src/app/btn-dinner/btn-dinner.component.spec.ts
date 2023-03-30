import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDinnerComponent } from './btn-dinner.component';

describe('BtnDinnerComponent', () => {
  let component: BtnDinnerComponent;
  let fixture: ComponentFixture<BtnDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
