import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { Carousel1Component } from './carousel1/carousel1.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    Carousel1Component
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
