import { Component, OnInit} from '@angular/core';
import {UserFighter} from '../models/userFighter';
import {FighterService} from '../fighter.service';
import {ActivatedRoute, Router} from '@angular/router';
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
    
    constructor(private service: FighterService, private route: ActivatedRoute, private router : Router) {}

    ngOnInit(): void {
      this.service.getUsers().subscribe(data => {
        let jsonObject : any = data;
        this.usersFghter = new Array();
        for(let fighter of jsonObject.results) {
          // console.log(fighter);
          let userFighter = new UserFighter(fighter.login.uuid, fighter.gender, fighter.name.first, fighter.name.last, fighter.picture.large);
          this.usersFghter.push(userFighter);
        }
        // console.log(this.usersFghter);
      })
    }

    gotoDynamic(mySelectedFighter:UserFighter) {
      this.selectedFighter = mySelectedFighter;
      console.log(mySelectedFighter);
      
      this.router.navigateByUrl('/battle-fight', { state: mySelectedFighter });
    }

    // onSelect(userFighter: UserFighter): void {
    //   console.log("j'entre dans la fonction");
    //   this.selectedFighter = userFighter;
    //   console.log(this.selectedFighter);
    // }

}