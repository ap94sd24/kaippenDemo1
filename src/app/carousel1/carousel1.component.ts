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
       {name: 'assets/images/nyc.jpg'},
       {name: 'assets/images/sf.jpg'},
       {name: 'assets/images/la.jpg'},
       {name: 'assets/images/nyc.jpg'},
       {name: 'assets/images/sf.jpg'},
       {name: 'assets/images/la.jpg'}
     ]
  }

  ngOnInit() {
  }

}
