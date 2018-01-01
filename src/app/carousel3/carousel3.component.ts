import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.css']
})
export class Carousel3Component implements OnInit {
 items: Array<any> = []
  constructor() {
    this.items = [
      {name: 'assets/images/p5.jpg'},
      {name: 'assets/images/p6.jpg'},
      {name: 'assets/images/p5.jpg'},
      {name: 'assets/images/p6.jpg'},
      {name: 'assets/images/p5.jpg'},
      {name: 'assets/images/p6.jpg'}
    ]
 }

  ngOnInit() {
  }

}
