import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  template: `
    <h1>
      Authors!

      <ul>
        <li *ngFor="let a of authors">
          {{ a }}
        </li>
      </ul>
    </h1>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;

  constructor(service: AuthorsService) {
    this.authors = service.fetchAuthors();
  }

  ngOnInit(): void {
  }

}
