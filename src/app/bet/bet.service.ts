import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Bet} from "./bet";



@Injectable()
export class BetService {
  constructor(public http: Http) {}

  get_bets(params:Object, callback:Function){
    let url_params;

    if(params){
      url_params = this.to_url_params(params);
    }else{
      url_params = ""
    }

    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.http.get(`${environment.api.url}/bets?${url_params}`, {headers}).subscribe(
      (res:Response) => callback(res)
    );
  }

  get_bet(id: number, callback:Function){

    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.http.get(`${environment.api.url}/bets/${id}`, {headers}).subscribe(
      (res:Response) => callback(res)
    );

  };

  vote_for_bet(bet:Bet, answer:string, callback:Function){

    let body = JSON.stringify({
      'vote': {
        'username': "Anonymous",
        'answer': answer
      }
    });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });

    this.http.post(`${environment.api.url}/bets/${bet.id}/votes`, body, options).subscribe(
        (res:Response) => callback(res)
    );

  }

  create_bet(bet:Bet, callback:Function){

    let body = JSON.stringify({bet: bet});

    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });

    this.http.post(`${environment.api.url}/bets`, body, options).subscribe(
        (res:Response) => callback(res)
    );


  }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', `Bearer ${environment.api.token}`);
  }

  to_url_params(params):String{
    let str = [];
    for(var p in params)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
    return str.join("&");
  }

}
