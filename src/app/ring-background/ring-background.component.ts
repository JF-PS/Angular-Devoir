import { Component, OnInit } from '@angular/core';
import {BattleFightComponent} from '../battle-fight/battle-fight.component';

@Component({
  selector: 'app-ring-background',
  templateUrl: './ring-background.component.html',
  styleUrls: ['./ring-background.component.css']
})
export class RingBackgroundComponent implements OnInit {

  public backgroundClass="backgroundRing";

  private isStarted:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }


  componentAdded($event){
      if($event instanceof BattleFightComponent) {
          $event = $event.activate.subscribe(x => {
            this.isStarted = x;
            this.changeBackground(this.isStarted);
          });
        } 
        else {
          this.isStarted = false;
          this.changeBackground(this.isStarted);
        }
      }

      changeBackground(isStarted){
        if(isStarted == true){
          this.backgroundClass="backgroundGame";
        }
        else{
          this.backgroundClass="backgroundRing";
        }
  }



}
