import { Component, OnInit } from "@angular/core";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.componet.html'
})

export class  CourseListComponent implements OnInit {
    cousers: Course[] = [];

    ngOnInit(): void{
        this.cousers = [{
            id: 1,
            name: 'Angular: forms',
            imageURl: '',
            price: 99.99,
            code: 'XPS-8796',
            duration: 120,
            rating: 4.5
        },
        {
            id: 2,
            name: 'Angular: forms',
            imageURl: '',
            price: 45.99,
            code: 'LKL-1094',
            duration: 80,
            rating: 4
        },
        ]
    }
}