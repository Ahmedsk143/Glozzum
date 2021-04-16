import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.scss'],
})
export class Services2Component implements OnInit {
  features = [
    { title: 'Service Plan One', cost: '$59.99/Month' },
    { title: 'Service Plan Two', cost: '$99.99/Month' },
    { title: 'Service Plan Three', cost: '$129.99/Month' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
