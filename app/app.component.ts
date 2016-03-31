import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <courses></courses>
        <authors></authors>
        <img [src] = "imageUrl" />
        <br>
        <br>
        <button
            class="btn btn-primary"
            [class.active]="isActive"
            [style.backgroundColor]=" isActive ? 'blue' : 'gray'"
        >TEST</button>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent {
    title = "My First Angular 2 App";
    imageUrl = "http://lorempixel.com/400/200/";
    isActive = true;
}