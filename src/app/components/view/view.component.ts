import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  link1: string;
  constructor() {
    this.link1 = "./assets/photos/photo2.jpeg";
   }

  ngOnInit(): void {
  }

}
