import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class  CourseListComponent implements OnInit {
    cousers: Course[] = [];
    
    constructor(private courseService: CourseService) { }

    ngOnInit(): void{
        this.cousers = this.courseService.retrieveAll();
    }
}