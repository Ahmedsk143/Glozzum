import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact3',
  templateUrl: './contact3.component.html',
  styleUrls: ['./contact3.component.scss'],
})
export class Contact3Component implements OnInit {
  staff = [
    {
      name: 'Jane Doe',
      title: 'Marketing Manager',
      img: '../../../assets/img/person1.jpg',
    },
    {
      name: 'Sara Williams',
      title: 'Business Manager',
      img: '../../../assets/img/person2.jpg',
    },
    { name: 'John Doe', title: 'CEO', img: '../../../assets/img/person3.jpg' },
    {
      name: 'Steve Smith',
      title: 'Web Developer',
      img: '../../../assets/img/person4.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
