import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcComponent } from './ugc.component';

describe('UgcComponent', () => {
  let component: UgcComponent;
  let fixture: ComponentFixture<UgcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
