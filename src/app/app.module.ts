import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Carousel1Component,
    Carousel2Component,
    Carousel3Component,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
