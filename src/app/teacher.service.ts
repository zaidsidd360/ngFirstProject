import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './Teachers';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeachers(): Observable<{ teachers: Teacher[] }> {
    return this.http.get<{ teachers: Teacher[] }>(
      'http://localhost:8080/api/teachers'
    );
  }
}
