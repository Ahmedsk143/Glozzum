import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}
  scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }
  scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }
  scrollToBlog() {
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
}
