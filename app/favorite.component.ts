import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component ({
    selector: 'favorite',
    template: `
    <br><br>
    <i class="glyphicon" 
        [class.glyphicon-star-empty]="isFavorite"
        [class.glyphicon-star]="!isFavorite"
        (click)="onClick()"
    >
    <br><br>
    `
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite;
    @Output() changeOwn = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.changeOwn.emit({ newValue: this.isFavorite });
    }
}