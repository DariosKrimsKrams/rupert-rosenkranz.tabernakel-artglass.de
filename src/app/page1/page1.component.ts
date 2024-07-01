import { Component } from '@angular/core';
import { ImageDto } from '../gallery/gallery.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
})
export class Page1Component {

  public images = [
    { path: '/media/Aquarell.jpg', name: 'Aquarell nach Skizzen in russischer Kriegsgefangenschaft' },
    { path: './media/Hafen.jpg', name: '' },
    { path: './media/Selbst.jpg', name: 'frühe Ölbilder' },
    { path: './media/Der%20werfe%20den%20ersten%20Stein.jpg', name: '' },
    { path: './media/Br%C3%BCcken-kl.jpg', name: '' },
    { path: './media/Der%20vergessene%20Wikinger-kl.jpg', name: '' },
    { path: './media/Gruppe%20am%20Wasser-kl.jpg', name: '' },
    { path: './media/Orakel-kl.jpg', name: '' },
    { path: './media/Bild%20Fig%C3%BCl.jpg', name: '' },
    { path: './media/Abstrakt2(1).jpg', name: '' },
    { path: './media/Br%C3%BCcke.jpg', name: '' },
  ] as ImageDto[];
}
