import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services3',
  templateUrl: './services3.component.html',
  styleUrls: ['./services3.component.scss'],
})
export class Services3Component implements OnInit {
  leftAccorions = ['One', 'Two', 'Three'];
  rightAccorions = ['Four', 'Five', 'Six'];

  constructor() {}

  ngOnInit(): void {}
}
