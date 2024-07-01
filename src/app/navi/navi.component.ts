import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
})
export class NaviComponent {

  public isMobileMenuActive = false;

  public navi = [
    { name: 'Home', link: '/' },
    { name: 'Vita', link: '/vita' },
    { name: 'Malerei der 50er und 60er Jahre', link: '/malerei-der-50er-und-60er-jahre' },
    { name: 'Frauenbildnisse', link: '/frauenbildnisse' },
    { name: 'Ein Fisch erlebt das XX. Jahrhundert', link: '/ein-fisch-erlebt-das-xx.-jahrhundert' },
    { name: 'Grafiken & Poster', link: '/grafiken-poster' },
    { name: 'Fridgard Rosenkranz Keramik / Reliefbilder', link: '/fridgard-rosenkranz-keramik-reliefbilder' },
  ]
  
  constructor(
    public router: Router
  ) { }
}
