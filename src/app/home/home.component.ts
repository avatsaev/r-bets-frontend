import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Bet } from '../bet/bet'
import { BetService } from '../bet'



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.sass'],
  providers: [BetService]
})

export class HomeComponent implements OnInit {
  new_bet:Bet;
  latest_bets:Array<Bet>;

  constructor(private bet_service:BetService, private router: Router) {

    this.latest_bets = new Array<Bet>();
    this.new_bet = new Bet();

    this.bet_service.get_bets({last: 4}, (res)=>{

      const result = res.json();

      for(let json_bet of result.bets){
        this.latest_bets.push(new Bet(json_bet));
      }

      this.latest_bets.reverse();




    });
  }

  create_bet(){

    this.bet_service.create_bet(this.new_bet, (res) => {

      if(res.status >= 200 || res.status < 200){
        const bet_json = res.json();

        if(bet_json.id){
          this.router.navigate(['/bet', bet_json.id]);
        }

      }

    });

  }

  ngOnInit() {

  }

  goBack() {
    window.history.back();
  }
}
