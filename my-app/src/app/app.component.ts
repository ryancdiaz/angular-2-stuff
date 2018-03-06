import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'poopville';
  message: string = 'Have a nice poop!';

  myPoop = {
    poop: 'solid',
    count: '3 pieces',
  }

  poop(event) {
    console.log('just pooped');
    console.log(event);
  }

  homeUpdated() {
    console.log('at home pooping...');
  }
}
