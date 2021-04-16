import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.scss'],
})
export class Blog2Component implements OnInit {
  blogs = [
    {
      title: 'One',
      author: 'Jeff on 05/20',
      src: 'https://source.unsplash.com/random/300x200',
    },
    {
      title: 'Two',
      author: 'Karen on 05/22',
      src: 'https://source.unsplash.com/random/301x200',
    },
    {
      title: 'Three',
      author: 'Harry on 05/23',
      src: 'https://source.unsplash.com/random/302x200',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
