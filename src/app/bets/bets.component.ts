import { Component, OnInit } from '@angular/core';
import { Bet } from '../bet/bet'
import { BetService } from '../bet/bet.service'

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.sass']
})

export class BetsComponent implements OnInit {

  latest_bets:Array<Bet>;

  constructor(private bet_service:BetService) {

  }

  ngOnInit() {

    this.latest_bets = new Array<Bet>();

    this.bet_service.get_bets({last: 100}, (res)=>{

      const result = res.json();

      for(let json_bet of result.bets){
        this.latest_bets.push(new Bet(json_bet));
      }

      this.latest_bets.reverse();

    });

  }

}
