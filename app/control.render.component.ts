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
    <ul>
        <template ngFor [ngForOf]="coursesFor" #course #i=index>
            <li>{{ i + 1 }} - {{ course }}</li>
        </template>
    </ul>

<h2>Controlling Rendering of HTML - ngStyle</h2>
    <button
        [style.backgroundColor]="canSave ? 'blue' : 'gray'"
        [style.color]="canSave ? 'white' : 'black'"
        [style.fontWeight]="canSave ? 'bold' : 'normal'"
    >Submit</button>
    <button
        [ngStyle]="{
            backgroundColor: canSave ? 'blue' : 'gray',
            color: canSave ? 'white' : 'black',
            fontWeight: canSave ? 'bold' : 'normal'
        }"
    >Submit</button>
    
<h2>Controlling Rendering of HTML - Elvis Operator</h2>
    <ul>
        <li>Title: {{ task.title }}</li>
        <li>Assigned to: {{
            task.assignee != null ?
            task.assignee.name : ""
            }}
        </li>
        <li>Assigned to:{{ task.assignee?.name }}</li>
    </ul>
    `
})

export class ControlRenderComponent {
    courses = [];
    viewMode = 'map';
    coursesFor = ['course1','course2','course3'];
    canSave = true;
    task = {
        title: "Review applications",
        assignee: null
    };
}