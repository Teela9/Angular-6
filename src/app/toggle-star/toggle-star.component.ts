import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav',
  template: `
    <h1>
      <span
        (click)="toggleState()"
        [class]="
          showStar
            ? 'glyphicon glyphicon-star'
            : 'glyphicon glyphicon-star-empty'
        "
        aria-hidden="true"
      ></span>
    </h1>
  `,
  styleUrls: ['./toggle-star.component.css'],
})
export class ToggleStarComponent implements OnInit {
  constructor() {}

  //glyphicon glyphicon-star

  showStar = true;

  ngOnInit(): void {}

  toggleState() {
    this.showStar = !this.showStar;
  }
}
