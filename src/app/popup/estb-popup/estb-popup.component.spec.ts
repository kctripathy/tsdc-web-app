import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstbPopupComponent } from './estb-popup.component';

describe('EstbPopupComponent', () => {
  let component: EstbPopupComponent;
  let fixture: ComponentFixture<EstbPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstbPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstbPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
