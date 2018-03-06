import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // inputs: ['myPoop']
})
export class HomeComponent implements OnInit {
  homeGreeting : string = 'welcome home! have a nice poop.';
  poopString: string = 'i like poop';
  lastPoopString: string = 'i liked poop';

  @Input() myPoop;
  @Output() onPoop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  poop() {
    this.lastPoopString = this.poopString;
  }

  firePoopEvent(event) {
    this.onPoop.emit(event);
  }

}
