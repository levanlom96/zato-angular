import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Output() keyIsClicked = new EventEmitter(); // Vaswavle rogor unda eyvira

  keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Delete'];

  constructor() { }

  ngOnInit() {
  }

  clicked(racGinda) {
    this.keyIsClicked.emit(racGinda);  // iyvire, ra iyviros aris racGinda
  }

}
