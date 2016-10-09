import { Component, OnInit, Input } from '@angular/core';
import {BetService} from '../bet/bet.service'
import {Bet} from '../bet/bet'
import 'actioncable-js'
import { environment } from '../../environments/environment';
declare let ActionCable:any;

@Component({
  selector: 'app-embed-bet',
  templateUrl: './embed-bet.component.html',
  styleUrls: ['./embed-bet.component.sass'],
  providers: [BetService]
})
export class EmbedBetComponent implements OnInit {
  @Input() bet:Bet;
  cable:any;
  cable_bet_subscription:any;

  constructor(private bet_service:BetService) { }

  vote(answer){

    this.bet_service.vote_for_bet(this.bet, answer, (res)=>{
      if(res.status == "error" ){
        //Materialize.toast(res.msg, 1000, 'rounded')
        alert(res.msg)
      }
    });

  }

  ngOnInit() {
    this.cable = ActionCable.createConsumer(environment.actioncable.url);

    this.cable_bet_subscription = this.cable.subscriptions.create({
          channel: "BetChannel",
          bet_id: this.bet.id
        },
        {
          received: (data) => {

            if(data.event){

              console.log(data)

              switch (data.event){
                case 'new_vote':
                  this.bet.answer_a_count = data.bet.answer_a_count;
                  this.bet.answer_b_count = data.bet.answer_b_count;
                  break;
              }

            }
          }

        }

    );
  }

}
