import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  fetchCourses(){
    return ["Maths", "Science", "Social", "English", "Economics"];
  }
}
