import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capral',
  templateUrl: './capral.component.html',
  styleUrls: ['./capral.component.css']
})
export class CapralComponent implements OnInit {
  @Input() zato;

  constructor() { }

  ngOnInit() {
  }

}
