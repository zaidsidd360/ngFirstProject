import { Component } from '@angular/core';
import { TeacherService } from './teacher.service';
import { Teacher } from './Teachers';

@Component({
  selector: 'ngfp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ngFirstProject';
  myTitle = 'hello world';

  teachers: Teacher[] = [];

  constructor(private service: TeacherService) {}

  ngOnInit(): void {
    this.service.getTeachers().subscribe((res: { teachers: Teacher[] }) => {
      this.teachers = res.teachers;
    });
  }
}
