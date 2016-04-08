import {Component, Input} from 'angular2/core'

@Component ({
    selector: 'like',
    template: `
        <br><br>
        <i 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="iLike"
            (click)="onClick()">
        </i>
        <span>{{ currentLikes }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
        
    `]
})

export class LikeComponent {
    @Input('current-likes') currentLikes = 0;
    @Input('i-like') iLike = false;
    
    onClick() {
        this.iLike = !this.iLike;
        //this.iLike ? this.currentLikes++ : this.currentLikes--;
        this.currentLikes += this.iLike ? 1 : -1;
    }
    
}