import { Component } from '@angular/core';
import { ImageDto } from '../gallery/gallery.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
})
export class Page2Component {

  public images = [
    { path: './media/Aktstudie-kl.jpg', name: '' },
    { path: './media/Akt-kl.jpg', name: '' },
    { path: './media/M%C3%A4dchen-kl.jpg', name: '' },
    { path: './media/M%C3%A4dchen-kl58.jpg', name: '' },
    { path: './media/M%C3%A4dchen%20am%20Feuer%201958-kl.jpg', name: '' },
    { path: './media/Frauenkopf-kl54.jpg', name: '' },
    { path: './media/Fl%C3%B6tenspielerin-kl64.jpg', name: '' },
    { path: './media/PaarEntw-kl.jpg', name: '' },
    { path: './media/PaarLitho-KL.jpg', name: '' },
    { path: './media/Aktskizze2-kl.jpg', name: '' },
    { path: './media/Aktskizze-kl.jpg', name: '' },
  ] as ImageDto[];
}
