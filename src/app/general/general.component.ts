import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  capitans = [
    [{ direction: 'მარცხნივ' }, { direction: 'მარჯვნივ' }, { direction: 'მარჯვნივ' }, { direction: 'მარცხნივ' }, { direction: 'მარცხნივ' }],
    [{ direction: 'მარცხნივ' }, { direction: 'მარცხნივ' }, { direction: 'მარჯვნივ' }],
  ];

  constructor() { }

  ngOnInit() {
  }

}
