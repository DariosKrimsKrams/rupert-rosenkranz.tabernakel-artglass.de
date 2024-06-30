import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
  exports: [RouterModule]
})
export class AppModule { }
