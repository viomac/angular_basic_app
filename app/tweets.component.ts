import {Component} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component ({
    selector: 'tweets',
    template: `
        <h4>Inician Tweets desde componente general</h4>
        <div *ngFor="#tweet of tweets">            
            <tweet [tweet-content]="tweet"></tweet>
        </div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})

export class TweetsComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
        console.log(this.tweets);
    }
}