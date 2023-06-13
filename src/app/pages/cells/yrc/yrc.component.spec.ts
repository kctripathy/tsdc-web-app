import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YrcComponent } from './yrc.component';

describe('YrcComponent', () => {
  let component: YrcComponent;
  let fixture: ComponentFixture<YrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
