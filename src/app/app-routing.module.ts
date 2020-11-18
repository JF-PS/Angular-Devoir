import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';
import {MenuComponent}          from './menu/menu.component';
import {UserFighterComponent}   from './user-fighter/user-fighter.component';
import {BattleFightComponent}   from './battle-fight/battle-fight.component';
import {StatBattleComponent}    from './stat-battle/stat-battle.component';
import {UserFighter}            from './models/userFighter';
import {StatGame}               from './models/statGame';

const routes: Routes = [
  { path: '',             redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu',         component:  MenuComponent },
  { path: 'user-fighter', component:  UserFighterComponent },
  { path: 'battle-fight', component:  BattleFightComponent },
  { path: 'stat',         component:  StatBattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
