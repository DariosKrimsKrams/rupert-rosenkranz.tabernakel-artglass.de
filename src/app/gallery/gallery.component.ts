import { Component, HostListener, Input } from '@angular/core';

export class ImageDto {
  public path: string = ''
  public name: string = ''
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  @Input() public images: ImageDto[] = [];
  public currentImage: ImageDto|undefined = undefined;

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.currentImage = undefined;
  }

  // on key left 
  @HostListener('document:keydown.arrowleft', ['$event'])
  onKeyleftHandler() {
    if (this.currentImage) {
      const index = this.images.indexOf(this.currentImage);
      if (index > 0) {
        this.currentImage = this.images[index - 1];
      }
    }
  }

  // on key right
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyrightHandler() {
    if (this.currentImage) {
      const index = this.images.indexOf(this.currentImage);
      if (index < this.images.length - 1) {
        this.currentImage = this.images[index + 1];
      }
    }
  }
}
