import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onActivate(event: any) {
    window.scroll(0,0);
 }
}
