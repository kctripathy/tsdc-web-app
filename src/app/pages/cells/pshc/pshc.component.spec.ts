import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PshcComponent } from './pshc.component';

describe('PshcComponent', () => {
  let component: PshcComponent;
  let fixture: ComponentFixture<PshcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PshcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PshcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
