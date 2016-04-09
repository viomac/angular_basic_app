import {Component} from 'angular2/core'
import {LikeComponent} from './like.component'
import {TweetService} from './tweet.service'

@Component ({
    selector: 'tweet',
    template: `
        <h1>Tweets</h1>
        <div class="media" *ngFor='#tweet of tweets'>
            <div class="media-left">
                <a href="#">
<img class="media-object img-rounded" src="{{tweet.image}}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <strong>{{ tweet.name }} </strong>
                    <small><strong>{{ tweet.user }}</strong></small>
                </h4>
                <p>{{ tweet.comment }}</p>
                <div >
                <like [current-likes]="tweet.likes" [i-like]="tweet.myVote"></like>
                </div>
            </div>
        </div>
    `,
    styles: [`
        small{
            font-size: 18px;
            color: #D4CDD1;
        }
        #tweet-comp {
            height: 20px;
        }
    `],
    directives: [LikeComponent],
    providers: [TweetService]
})


export class TweetComponent {
    tweets;
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}