import { Component, OnInit} from '@angular/core';
import {UserFighter} from '../models/userFighter';
import {FighterService} from '../fighter.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

// import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-fighter',
  templateUrl: './user-fighter.component.html',
  styleUrls: ['./user-fighter.component.css']
})


export class UserFighterComponent implements OnInit {
    title = 'Choose a fighter !';
    usersFghter: UserFighter[];
    selectedFighter: UserFighter;
    
    constructor(private service: FighterService, private route: ActivatedRoute, private router : Router,  private location: Location) {}

    ngOnInit(): void {
      this.recupUserFromApi();
    }

    gotoBattle(mySelectedFighter:UserFighter) {
      this.selectedFighter = mySelectedFighter;
      this.router.navigateByUrl('/battle-fight', { state: mySelectedFighter });
    }

    goBack(): void {
      this.location.back();
    }

    recupUserFromApi(){
      this.service.getUsers().subscribe(data => {
        let jsonObject : any = data;
        this.usersFghter = new Array();
        for(let fighter of jsonObject.results) {
          let userFighter = new UserFighter(fighter.login.uuid, fighter.gender, fighter.name.first, fighter.name.last, fighter.picture.large,100);
          this.usersFghter.push(userFighter);
        }
      })
    }

}