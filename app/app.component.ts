import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'

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
        <br>
        <br>
        
        
        <div (click) = "onDivClick()">
            <button (click) = "onClick($event)">Submit</button>
            <button on-click = "onClick($event)">Submit</button>
        </div>
        <br>
        <br>
        
        
        <input
            type="text"
            [value]="inputContent"
            (input)="inputContent = $event.target.value"
        /><br>
        <input type="text" [(ngModel)]="inputContent" /><br>
        <input type="text" bindon-ngModel="inputContent" /><br>       
        <input type="button" (click)="inputContent = '' " value="Clear" />
        Preview: {{ inputContent }}
        <br>
        <br>
        
        
        <favorite></favorite>
        <br>
        <br>
        
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})

export class AppComponent {
    title = "My First Angular 2 App";
    imageUrl = "http://lorempixel.com/400/200/";
    isActive = true;
    inputContent = "Test two way binding";

    onClick($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    onDivClick() {
        console.log("Handle by Div.");
    }
}