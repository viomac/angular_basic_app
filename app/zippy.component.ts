import {Component, Input} from 'angular2/core'

@Component ({
    selector: 'zippy',
    template: `
<div class="panel panel-default">
    <div class="panel-heading" (click)="toggle()">
        <div class="title">{{ title }}
            <span
                class="glyphicon pull-right"
                [ngClass]="{
                    'glyphicon-chevron-down' : isCollapsed,
                    'glyphicon-chevron-up' : !isCollapsed
                }"
            >
            </span>
        </div>
    </div>
    <div 
        class="panel-body"
        *ngIf="isCollapsed == true">
        <ng-content select=".body"></ng-content>
    </div>
</div>
    `
})

export class ZippyComponent {
    isCollapsed = false;
    @Input() title = '';
    
    toggle(){
        this.isCollapsed = !this.isCollapsed;   
    }
}