import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../datasource/courses';
import { CoursesService } from '../datasource/datasource.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit{

  beginnerCourses$: Observable<Course[]> | undefined;

  advancedCourses$: Observable<Course[]> | undefined;
  fetchData = false;


  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    
      this.fetchData = true;
      const courses$ = this.coursesService.findAllCourses();
      
      this.beginnerCourses$ = courses$.pipe(
        map((courses:any) => courses.filter((course:any) => course.category === 'BEGINNER') )
      );


      
  //this.beginnerCourses$.subscribe(val => console.log(val));
      /*this.advancedCourses$ = courses$.pipe(
          map(courses => courses.filter(course => course.category === 'ADVANCED') )
      ); */
          
  }  

  checkObservable() {
    //console.log("called")
    this.coursesService.findAllCourses().subscribe((data) => {
      console.log(data)
    })
  }
  
  ngOnDestroy() {
    console.log("destroy called0");
    this.fetchData = false;
  } 
  
} 
