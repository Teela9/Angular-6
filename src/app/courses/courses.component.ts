import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h1>
      {{ getTitle() }}


    <ul>
      <li *ngFor="let c of courses">
          {{ c }}
      </li>
    </ul>

    </h1>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of Courses";

  courses;

  getTitle(){
    return this.title;
  }

  constructor(service: CoursesService) {

    this.courses = service.fetchCourses();
  }

  ngOnInit(): void {
  }

}
