import { Component, OnInit, Input } from '@angular/core';
import { SuperService } from '../services/super.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  @Input() id: number;
  isActive = false;

  text: string = "";

  constructor(private superService: SuperService) { }

  ngOnInit() {
    this.subscribeOnActiveItemSubject();
    this.subscribeTextSubject();
  }

  subscribeOnActiveItemSubject() {
    this.superService.getItemSubject().subscribe(
      (param: number) => {

        if (param === this.id) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }

      }
    );
  }

  subscribeTextSubject() {
    this.superService.getTextSubject().subscribe(
      (letter) => {
        if (this.isActive) {

          if (letter !== 'DELETE') {
            this.text += letter;
          } else {
            this.text = '';
          }

        }
      }
    );
  }

  makeActive() {
    this.superService.changeActiveItem(this.id);
  }

}
