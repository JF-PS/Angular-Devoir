import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFighterComponent } from './user-fighter.component';

describe('UserFighterComponent', () => {
  let component: UserFighterComponent;
  let fixture: ComponentFixture<UserFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
