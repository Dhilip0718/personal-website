import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: { label: string, route: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navLinks=[
      { label: 'Home', route: '/home' },
      { label: 'About', route: '/about' },
      { label: 'Services', route: '/services' },
      { label: 'Contact', route: '/contact' },
      { label: 'Blog', route: '/blog' }
    ];
  }

}
