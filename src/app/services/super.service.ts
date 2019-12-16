import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SuperService {
  activeBlank = 1;
  activeItemSubject = new Subject();
  textSubject = new Subject();

  constructor() { }

  getItemSubject() {
    return this.activeItemSubject;
  }

  getTextSubject() {
    return this.textSubject;
  }

  fireText(text) {
    this.textSubject.next(text);
  }

  changeActiveItem(param) {
    this.activeBlank = param;
    this.activeItemSubject.next(param);
  }
}
