import {Component} from 'angular2/core'

@Component ({
    selector: 'favorite',
    template: `
    <i class="glyphicon" 
        [class.glyphicon-star-empty]="empty"
        [class.glyphicon-star]="!empty"
        
        (click)="onClick($event)" 
    >
    `
})

export class FavoriteComponent {
    empty = true;
    onClick($event) {
        console.log('Clicked', $event);
        this.empty = !this.empty;
    }
    
}