import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitaComponent } from './vita/vita.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vita', component: VitaComponent },
  { path: 'malerei-der-50er-und-60er-jahre', component: Page1Component },
  { path: 'frauenbildnisse', component: Page2Component },
  { path: 'ein-fisch-erlebt-das-xx.-jahrhundert', component: Page3Component },
  { path: 'grafiken-poster', component: Page4Component },
  { path: 'fridgard-rosenkranz-keramik-reliefbilder', component: Page5Component },

];
