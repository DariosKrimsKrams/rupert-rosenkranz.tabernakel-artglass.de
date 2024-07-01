import { Component } from '@angular/core';
import { ImageDto } from '../gallery/gallery.component';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
})
export class Page4Component {

  public images = [
    { path: './media/FischLinol.jpg', name: '' },
    { path: './media/Elektrog(1).jpg', name: '' },
    { path: './media/LiebendenElektrog.jpg', name: '' },
  ] as ImageDto[];
  
  public images2 = [
    { path: './media/PosterMini1.jpg', name: '' },
    { path: './media/PosterMini2.jpg', name: '' },
    { path: './media/Radierung-kl.jpg', name: '' },
    { path: './media/NY-1961-kl.jpg', name: '' },
    { path: './media/PosterMini3.jpg', name: '' },
  ] as ImageDto[];
}
