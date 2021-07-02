import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "./courses";
import { map } from "rxjs/operators";

@Injectable()
export class CoursesService {

  constructor(private http : HttpClient) {}

  findAllCourses(): Observable<Course[]> {
    console.log("calling backend");
    return this.http.get('/api/courses')
        .pipe(
            map((res : any) => res['payload'])
        );
  }

}

