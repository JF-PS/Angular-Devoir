import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameFooterComponent } from './game-footer/game-footer.component';
import { UserFighterComponent } from './user-fighter/user-fighter.component';
import { RingBackgroundComponent } from './ring-background/ring-background.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { BattleFightComponent } from './battle-fight/battle-fight.component';
import { GameSceneComponent } from './game-scene/game-scene.component';
import { StatBattleComponent } from './stat-battle/stat-battle.component';


@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    GameFooterComponent,
    UserFighterComponent,
    RingBackgroundComponent,
    MenuComponent,
    BattleFightComponent,
    GameSceneComponent,
    StatBattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
