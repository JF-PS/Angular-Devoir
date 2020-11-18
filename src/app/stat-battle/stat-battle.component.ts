import { Component, OnInit } from '@angular/core';
import {StatGame} from '../models/statGame';
import {UserFighter} from '../models/userFighter';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stat-battle',
  templateUrl: './stat-battle.component.html',
  styleUrls: ['./stat-battle.component.css']
})
export class StatBattleComponent implements OnInit {

  statGame: StatGame;
  playerFighter: UserFighter;
  ordiFighter: UserFighter;
  winnerIsPlayer: boolean = true;
  myTime = new Date();
  BattleTimeEnd:number = this.myTime.getTime() / 1000;
  TotalpartiTime:number;


  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.statGame = history.state;
    let seconde = (this.BattleTimeEnd - this.statGame.battleTime) / 60;
    this.TotalpartiTime =  Math.round(seconde * 100) / 100;
    this.ordiFighter = this.statGame.ordiFighter;
    this.playerFighter = this.statGame.playerFighter;
    if(this.statGame.ordiFighter.firstName == this.statGame.winerFighter){
      this.winnerIsPlayer = false;
    }
  }

  gotoBattle(mySelectedFighter:UserFighter) { 
    this.playerFighter.life=100;
    this.router.navigateByUrl('/battle-fight', { state: this.playerFighter });
  }

}
