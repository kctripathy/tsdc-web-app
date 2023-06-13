import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NssComponent } from './nss.component';

describe('NssComponent', () => {
  let component: NssComponent;
  let fixture: ComponentFixture<NssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
