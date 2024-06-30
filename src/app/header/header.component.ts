import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  public isMobileMenuActive = false;

  public navi = [
    { name: 'Home', link: '/' },
    { name: 'Vita', link: '/vita' },
  ]

  constructor(
    public router: Router
  ) { }
}
