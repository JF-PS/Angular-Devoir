import {UserFighter} from './userFighter';
export class StatGame {
    constructor(
        public ordiFighter: UserFighter, 
        public playerFighter: UserFighter, 
        public winerFighter: string, 
        public battleTime:number
    ){}
}
  