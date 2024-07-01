import { Component } from '@angular/core';
import { ImageDto } from '../gallery/gallery.component';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
})
export class Page3Component {

  public images = [
    { path: './media/Fisch0(1).jpg', name: '' },
    { path: './media/Fisch2(1).jpg', name: '' },
    { path: './media/Fisch3(1).jpg', name: '' },
    { path: './media/Fisch5.jpg', name: '' },
    { path: './media/Fisch6.jpg', name: '' },
    { path: './media/Fisch7.jpg', name: '' },
    { path: './media/Fisch8.jpg', name: '' },
    { path: './media/Fisch9.jpg', name: '' },
    { path: './media/Fisch10.jpg', name: '' },
    { path: './media/Fisch11.jpg', name: '' },
    { path: './media/Fisch12.jpg', name: '' },
    { path: './media/Fisch13.jpg', name: '' },
    { path: './media/Fisch14.jpg', name: '' },
    { path: './media/Fisch15.jpg', name: '' },
    { path: './media/Fisch16.jpg', name: '' },
    { path: './media/Fisch17.jpg', name: '' },
    { path: './media/Fisch18.jpg', name: '' },
    { path: './media/Fisch19.jpg', name: '' },
    { path: './media/Fisch20.jpg', name: '' },
    { path: './media/Fisch21.jpg', name: '' },
    { path: './media/Fisch23.jpg', name: '' },
  ] as ImageDto[];
}
