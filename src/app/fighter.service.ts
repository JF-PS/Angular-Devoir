import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFighter} from './models/userFighter';
import { Observable } from 'rxjs';
import * as request from 'request';

@Injectable({
    providedIn: 'root'
})

export class FighterService {

    constructor(private http: HttpClient) {}

    getUsers() {
      let url = 'https://randomuser.me/api/?results=5';
      return this.http.get(url);
    }

    getUserOrdi(){
      let url = 'https://randomuser.me/api/?results=1';
      return this.http.get(url);
    }


}