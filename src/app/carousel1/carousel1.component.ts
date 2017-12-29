import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.css']
})
export class Carousel1Component implements OnInit {
  items: Array<any> = []
  constructor() {
     this.items = [
       {name: 'assets/images/banner1.jpg'},
       {name: 'assets/images/banner2.jpg'},
       {name: 'assets/images/banner1.jpg'},
       {name: 'assets/images/banner2.jpg'},
       {name: 'assets/images/banner1.jpg'},
       {name: 'assets/images/banner2.jpg'}
     ]
  }

  ngOnInit() {
  }

}
