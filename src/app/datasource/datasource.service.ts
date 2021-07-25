import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Course } from "./courses";
import { catchError, finalize, map } from "rxjs/operators";

@Injectable()
export class CoursesService {

  constructor(private http : HttpClient) {}

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  findAllCourses(): Observable<Course[]> {
    this.loadingSubject.next(true);
    return this.http.get('/api/courses')
        .pipe(
            map((res : any) => res['payload']),
            catchError((err) => of(['some error found'])),
            finalize(() => {  console.log("finalixe"); this.loadingSubject.next(false);})
        );
  }  
}

