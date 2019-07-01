
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];

  constructor(){
    this.goals = ['Drink some redbull', 'Compile some code', 'Chat with the buddies']
  }
}
