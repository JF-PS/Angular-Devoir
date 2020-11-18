import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import {UserFighter} from '../models/userFighter';
import {StatGame} from '../models/statGame';
import {ActivatedRoute, Router} from '@angular/router';
import {FighterService} from '../fighter.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-battle-fight',
  templateUrl: './battle-fight.component.html',
  styleUrls: ['./battle-fight.component.css']
})
export class BattleFightComponent implements OnInit {

  selectedFighter: UserFighter;
  ordiFighter: UserFighter;
  statGame: StatGame;
  myTime = new Date();
  BattleTimeStart:number = this.myTime.getTime() / 1000;
  actionOrdi:String;

  constructor(    
    public activatedRoute: ActivatedRoute,
    private router : Router,
    private service: FighterService
  ){}

  @Output() public activate: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.selectedFighter = history.state;
    this.onFightStarted();
    this.service.getUserOrdi().subscribe(data => {
      let jsonObject : any = data;
      this.ordiFighter = new UserFighter(jsonObject.results[0].login.uuid, jsonObject.results[0].gender, jsonObject.results[0].name.first, jsonObject.results[0].name.last, jsonObject.results[0].picture.large,100);
    })
    this.gameManagment(1);
  }

  onFightStarted():void {
    this.activate.emit(true);
  }

  gameManagment(playerNumber:number):void{
    if(playerNumber == 1){
      this.gameOver();
      document.getElementById("actionPlayer").style.display =  "block";
    }
    else{
      this.gameOver();
      document.getElementById("actionPlayer").style.display =  "none";
      this.ordiAction();
    }
  }

  onPunch(playerNumber:number):void{
    if(playerNumber == 1){
      this.ordiFighter.life -= 20;
      document.getElementById("life_inside_ordi").style.width =  this.ordiFighter.life+"%";
      this.gameManagment(2);
    }
    else{
      this.actionOrdi = "-20 hp for you : The Ordi gives you a punch";
      this.selectedFighter.life -= 20;
      document.getElementById("life_inside_player").style.width =  this.selectedFighter.life+"%";
      this.gameManagment(1);
    }
  }

  onKick(playerNumber:number):void{
    if(playerNumber == 1){
      this.ordiFighter.life -= 30;
      document.getElementById("life_inside_ordi").style.width =  this.ordiFighter.life+"%";
      this.gameManagment(2);
    }else{
      this.actionOrdi = "-30 hp for you : The Ordi gives you a kick";
      this.selectedFighter.life -= 30;
      document.getElementById("life_inside_player").style.width =  this.selectedFighter.life+"%";
      this.gameManagment(1);
    }
  }

  onHeal(playerNumber:number):void{
    if(playerNumber == 1){
      this.selectedFighter.life += 10;
      document.getElementById("life_inside_player").style.width = this.selectedFighter.life+"%";
      this.gameManagment(2);
    }
    else{
      this.actionOrdi = "+10 hp for the ordi : The Ordi heals himself";
      this.ordiFighter.life += 10;
      document.getElementById("life_inside_ordi").style.width = this.ordiFighter.life+"%";
      this.gameManagment(1);
    }
  }

  ordiAction(){
      let attack = Math.floor(Math.random() * Math.floor(3));
      switch (attack) {
        case 0:
          this.onPunch(2);
          break;
        case 1:
          this.onKick(2);
          break;
        case 2:
          this.onHeal(2);
          break;
      }
  }

  gameOver():void{
    if(this.selectedFighter.life <= 0 || this.ordiFighter.life <= 0){
      let winnerFighter:string = (this.selectedFighter.life > this.ordiFighter.life ? this.selectedFighter.firstName : this.ordiFighter.firstName);
      this.statGame = new StatGame(this.ordiFighter,this.selectedFighter,winnerFighter, this.BattleTimeStart);
      this.router.navigateByUrl('/stat', { state: this.statGame });
    }


  }


}
