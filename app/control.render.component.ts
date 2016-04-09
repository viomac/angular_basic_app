import {Component} from 'angular2/core'

@Component ({
    selector: 'control-render',
    template: `
<h2>Controlling Rendering of HTML - *ngIf</h2>
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
    
<h2>Controlling Rendering of HTML - ngWItch</h2>
    <ul class = "nav nav-pills">
        <li [class.active]="viewMode == 'map'">
            <a (click)="viewMode = 'map'">Map View</a>
        </li>
        <li [class.active]="viewMode == 'list'">
            <a (click)="viewMode = 'list'">List View</a>
        </li>
    </ul>
    <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
    </div>

<h2>Controlling Rendering of HTML - ngFor</h2>
    <ul>
        <li *ngFor="#course of coursesFor, #i = index">
            {{ i + 1 }} - {{ course }}
        </li>
    </ul>

    `
})

export class ControlRenderComponent {
    courses = [];
    viewMode = 'map';
    coursesFor = ['course1','course2','course3'];
}