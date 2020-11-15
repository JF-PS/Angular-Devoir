import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFightComponent } from './battle-fight.component';

describe('BattleFightComponent', () => {
  let component: BattleFightComponent;
  let fixture: ComponentFixture<BattleFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
