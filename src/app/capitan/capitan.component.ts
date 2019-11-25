import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capitan',
  templateUrl: './capitan.component.html',
  styleUrls: ['./capitan.component.css']
})
export class CapitanComponent implements OnInit {
  @Input() kapitansracaqvsisinputi;

  constructor() { }

  ngOnInit() { }

}
