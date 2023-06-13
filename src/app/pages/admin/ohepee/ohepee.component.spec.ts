import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhepeeComponent } from './ohepee.component';

describe('OhepeeComponent', () => {
  let component: OhepeeComponent;
  let fixture: ComponentFixture<OhepeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhepeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhepeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
