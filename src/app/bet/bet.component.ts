import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../environments/environment';

import {Bet} from './bet';
import {BetService} from './bet.service'
import 'actioncable-js';

declare let ActionCable:any;

@Component({
  selector: 'app-bet',
  templateUrl: 'bet.component.html',
  styleUrls: ['bet.component.sass'],
  providers: [BetService]
})

export class BetComponent implements OnInit {

  bet:Bet;
  sub:any;
  cable:any;
  cable_bet_subscription:any;
  live_stream_connected:Boolean;


  constructor(
    private route:ActivatedRoute,
    private bet_service:BetService,
    private router:Router
  ) {

    this.live_stream_connected = false;

  }

  ngOnInit():void {

    this.sub = this.route.params.subscribe(params => {

      const id = +params['id'];

      this.bet_service.get_bet(id, (res) => {

        console.log("res: ", res.status)

        if(res.status == 200){

          const bet_json = res.json();

          if (bet_json.bet.id){

            this.bet = new Bet(bet_json.bet);
            this.cable = ActionCable.createConsumer(environment.actioncable.url);


            this.cable_bet_subscription = this.cable.subscriptions.create({
                channel: "BetChannel",
                bet_id: this.bet.id
              },
              {
                connected: () => this.live_stream_connected = true,

                disconnected: () => this.live_stream_connected = false,

                received: (data) => {

                  if(data.event){

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
        else if (res.status == 404){
          this.router.navigate(['/home', {
            flash:{
              error: "Bet not found"
            }
          }]);

        }

      });

    });

  }


  vote(answer){

    this.bet_service.vote_for_bet(this.bet, answer, (res)=>{});

  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
