import { Component, OnInit } from '@angular/core';
import { SuperService } from '../services/super.service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  constructor(private superService: SuperService) { }
  ngOnInit() { }

  write(chichikia) {
    this.superService.fireText(chichikia);
  }

}