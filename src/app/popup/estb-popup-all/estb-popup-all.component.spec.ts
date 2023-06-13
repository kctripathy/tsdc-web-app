import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstbPopupAllComponent } from './estb-popup-all.component';

describe('EstbPopupAllComponent', () => {
  let component: EstbPopupAllComponent;
  let fixture: ComponentFixture<EstbPopupAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstbPopupAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstbPopupAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
