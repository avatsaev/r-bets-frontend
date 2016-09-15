import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {Http} from '@angular/http';
import {Response} from "@angular/http";



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

    this.http.get(`${environment.api.url}/bets?${url_params}`).subscribe(
      (res:Response) => callback(res)
    );
  }

  get_bet(id: number, callback:Function){

    this.http.get(`${environment.api.url}/bets/${id}`).subscribe(
      (res:Response) => callback(res)
    );

  };

  create_bet(data:Object={}, callback:Function){

    const params = this.to_url_params(data);

    this.http.post(`${environment.api.url}/bets?${params}`, '').subscribe(
      (res:Response) => callback(res)
    );
  }

  to_url_params(params):String{
    let str = [];
    for(var p in params)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
    return str.join("&");
  }

}
