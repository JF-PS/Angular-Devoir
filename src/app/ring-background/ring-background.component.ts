import { Component, OnInit } from '@angular/core';
import {BattleFightComponent} from '../battle-fight/battle-fight.component';

@Component({
  selector: 'app-ring-background',
  templateUrl: './ring-background.component.html',
  styleUrls: ['./ring-background.component.css']
})
export class RingBackgroundComponent implements OnInit {

  private isStarted:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }



  componentAdded($event){

        if($event instanceof BattleFightComponent) {
           $event = $event.activate.subscribe(x =>  x);
        } 
        console.log(this.isStarted);
  }



}
