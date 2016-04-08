import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component ({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = true;
    @Output() changeOwn = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.changeOwn.emit({ newValue: this.isFavorite });
    }
}