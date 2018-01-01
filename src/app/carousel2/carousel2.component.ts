import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements OnInit {
   items: Array<any> = []
  constructor() {
    this.items = [
      {name: 'assets/images/p1.jpg'},
      {name: 'assets/images/p2.jpg'},
      {name: 'assets/images/p3.jpg'},
      {name: 'assets/images/p1.jpg'},
      {name: 'assets/images/p2.jpg'},
      {name: 'assets/images/p3.jpg'}
    ]
  }

  ngOnInit() {
  }

}
