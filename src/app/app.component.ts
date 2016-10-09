import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title:string;

  constructor (){
    this.title = "RBets"

    if(!localStorage.getItem('trio')){
      localStorage.setItem('trio', UUID.UUID());
    }

  }

  ngOnInit(){



  }
}
