import {Component, Input} from 'angular2/core'

@Component ({
    selector: 'like',
    template: `
        <br><br>
        <i 
            class="glyphicon glyphicon-heart"
            [style.color]="like ? 'deeppink' : '#ccc'"
            (click)="onClick()">
        </i>
        {{ currentLikes }}
    `
})

export class LikeComponent {
    @Input('current-likes') currentLikes = 0;
    like = false;
    
    onClick() {
        this.like = !this.like;
        this.like ? 
            this.currentLikes++ : 
            this.currentLikes--;
    }
    
}