import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component ({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
<img class="media-object img-rounded" src="{{ tweetContent.image }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <strong>{{ tweetContent.name }} </strong>
                    <small><strong>{{ tweetContent.user }}</strong></small>
                </h4>
                <p>{{ tweetContent.comment }}</p>
                <div >
                <like [current-likes]="tweetContent.likes" [i-like]="tweetContent.iLike"></like>
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
        .media {
            margin-bottom: 20px;
        }
    `],
    directives: [LikeComponent]
})


export class TweetComponent {
    @Input('tweet-content') tweetContent;
     
    constructor() { //No muestra nada en la consola
        console.log(this.tweetContent);
    }
}