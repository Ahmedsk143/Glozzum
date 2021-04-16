import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component implements OnInit {
  myInterval = 0;

  slides = [
    { image: '../../../assets/img/image1.jpg', heading: 'Heading One' },
    { image: '../../../assets/img/image2.jpg', heading: 'Heading Two' },
    { image: '../../../assets/img/image3.jpg', heading: 'Heading Three' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
