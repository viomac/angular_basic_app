import {Component} from 'angular2/core'

@Component ({
    selector: 'control-render',
    template: `
        <h2>Controlling Rendering of HTML</h2>
        <h3>*ngIF</h3>
        <div *ngIf="courses.length > 0">
            <p>List of courses</p>
        </div>
        <div *ngIf="courses.length == 0">
            <p>You dont have any courses yet.</p>
        </div>
    
        <h3>Hidden divs</h3>
        <div [hidden]="courses.length == 0">
            <p>List of courses</p>
        </div>
        <div [hidden]="courses.length > 0">
            <p>You dont have any courses yet.</p>
        </div>
    `
})

export class ControlRenderComponent {
    courses = [];
}