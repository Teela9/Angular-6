import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casing',
  template: `
    <h1>Converts to Title casing</h1>

    <input type="text" [(ngModel)]="textValue" />
    <br /><br /><br />
    <h3>
      {{ textValue | titleCasing }}
    </h3>
  `,
  styleUrls: ['./title-casing.component.css'],
})
export class TitleCasingComponent implements OnInit {
  textValue = '';

  constructor() {}

  ngOnInit(): void {}
}
