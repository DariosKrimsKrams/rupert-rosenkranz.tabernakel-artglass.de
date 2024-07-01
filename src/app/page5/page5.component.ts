import { Component } from '@angular/core';
import { ImageDto } from '../gallery/gallery.component';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
})
export class Page5Component {

  public images = [
    { path: './media/Keramik2.jpg', name: '' },
    { path: './media/Keramik4.jpg', name: '' },
    { path: './media/Keramik3.jpg', name: '' },
  ] as ImageDto[];
}
