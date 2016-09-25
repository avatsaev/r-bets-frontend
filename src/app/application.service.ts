import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import {Http} from '@angular/http';
import {Response} from "@angular/http";

@Injectable()
export class ApplicationService {

  constructor(public http: Http) { }

  health_check(callback){
    this.http.get(`http://${environment.backend.url}`).subscribe(
        (res:Response) => callback(res)
    );
  }

}
