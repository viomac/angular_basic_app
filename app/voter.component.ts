import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component ({
    selector: 'voter',
    template: `
    <br><br>
    <div class="vertical-voter">
        <i class="glyphicon glyphicon-menu-up"
           [class.highlighted]=" myVote == 1"
           (click)="onUpClick()">
        </i>
        <span>{{ voteCount + myVote }}</span>
        <i class="glyphicon glyphicon-menu-down"
           [class.highlighted]=" myVote == -1"
           (click)="onDownClick()">
        </i>
    <div>
    `,
    styles: [`
        .vertical-voter {
            width: 20px;
            color: #A09A9A;
        }
        .highlighted {
            color: orange;
        }
    `]
})


export class VoterComponent {
    @Input('vote-count') voteCount = 0;
    @Input('my-vote') myVote = 0;
    @Output() vote = new EventEmitter();
    
    onUpClick() {
        if(this.myVote == 1)
            return;

        this.myVote++;
        this.vote.emit({ finalVote: this.myVote});
    }

    onDownClick() {
        if(this.myVote == -1)
            return;

        this.myVote--;
        this.vote.emit({ finalVote: this.myVote});
    }
    
}