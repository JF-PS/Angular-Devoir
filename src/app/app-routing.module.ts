import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';
import {MenuComponent}          from './menu/menu.component';
import {UserFighterComponent}   from './user-fighter/user-fighter.component';
import {BattleFightComponent}   from './battle-fight/battle-fight.component';
import {UserFighter}            from './models/userFighter';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'user-fighter', component: UserFighterComponent },
  // { path: 'battle-fight/:id/:firstName/:lastName/:image', component:  BattleFightComponent }
  // { path: 'battle-fight', component:  BattleFightComponent, data : {some_data : UserFighter}}
  { path: 'battle-fight', component:  BattleFightComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
