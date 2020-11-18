import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBattleComponent } from './stat-battle.component';

describe('StatBattleComponent', () => {
  let component: StatBattleComponent;
  let fixture: ComponentFixture<StatBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
