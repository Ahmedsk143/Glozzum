import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component implements OnInit {
  features = ['Turning Gears', 'Sending Data', 'Making Money'];
  constructor() {}

  ngOnInit(): void {}
}
