import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../application.service"

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.sass'],
  providers: [ApplicationService]
})
export class FooterComponent implements OnInit {

  backend_instance:string;

  constructor(public app_serivce:ApplicationService) {


  }

  ngOnInit() {
    this.app_serivce.health_check((res) =>{
      console.log(res.json())
      this.backend_instance = res.json().host
    })
  }

}
