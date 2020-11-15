import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import {UserFighter} from '../models/userFighter';
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

  constructor(    
    public activatedRoute: ActivatedRoute,
    private service: FighterService
  ){}

  @Output() public activate: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.selectedFighter = history.state;
    this.onFightStarted();
    this.service.getUserOrdi().subscribe(data => {
      let jsonObject : any = data;
      this.ordiFighter = new UserFighter(jsonObject.results[0].login.uuid, jsonObject.results[0].gender, jsonObject.results[0].name.first, jsonObject.results[0].name.last, jsonObject.results[0].picture.large);
    })
  }

  onFightStarted():void {
    this.activate.emit(true);
  }


}
