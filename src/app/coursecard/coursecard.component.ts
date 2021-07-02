import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/datasource/courses';

@Component({
  selector: 'coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {

  @Input()
  courses: Course[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
