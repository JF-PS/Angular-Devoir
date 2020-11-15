import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingBackgroundComponent } from './ring-background.component';

describe('RingBackgroundComponent', () => {
  let component: RingBackgroundComponent;
  let fixture: ComponentFixture<RingBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
