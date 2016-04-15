import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetComponent} from './tweet.component'
import {TweetsComponent} from './tweets.component'
import {ControlRenderComponent} from './control.render.component'
import {PipesComponent} from './pipes.component'
import {BootstrapPanel} from './bootstrap.panel.component'
import {ZippyComponent} from './zippy.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <courses></courses>
        <authors></authors>
        <img [src] = "imageUrl" />
        <br>
        <br>
        <button
            class="btn btn-primary"
            [class.active]="isActive"
            [style.backgroundColor]=" isActive ? 'blue' : 'gray'"
        >TEST</button>
        <br>
        <br>
        
        
        <div (click) = "onDivClick()">
            <button (click) = "onClick($event)">Submit</button>
            <button on-click = "onClick($event)">Submit</button>
        </div>
        <br>
        <br>
        
        
        <input
            type="text"
            [value]="inputContent"
            (input)="inputContent = $event.target.value"
        /><br>
        <input type="text" [(ngModel)]="inputContent" /><br>
        <input type="text" bindon-ngModel="inputContent" /><br>       
        <input type="button" (click)="inputContent = '' " value="Clear" />
        Preview: {{ inputContent }}
        
        <br><br>
        <i class="glyphicon glyphicon-star"></i>
        <favorite [is-favorite]="post.isFavorite" (changeOwn)="onFavoriteChange($event)"></favorite>
        
        <like [current-likes]="tweet.currentLikes" [i-like]="tweet.iLike"></like>

        <voter
            [vote-count]="voter.voteCount"
            [my-vote]="voter.myVote"
            (vote)="onVote($event)"
        ></voter>

        <tweets></tweets>

        <control-render></control-render>

        <bs-panel>
            <div class="heading">The heading</div>
            <div class="body">This is the body!</div>
            <div class="body">This is another body!</div>
        </bs-panel>

        <pipes></pipes>

        <zippy [title]="'Who can see my stuff?'">
            <div class="body">Content of who can see my stuff</div>
        </zippy>
        <zippy [title]="'Who can contact me?'">
            <div class="body">Content of who can contact me</div>
        </zippy>

    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent, TweetsComponent, ControlRenderComponent, PipesComponent, BootstrapPanel, ZippyComponent]
})

export class AppComponent {
    title = "My First Angular 2 App";
    imageUrl = "http://lorempixel.com/400/200/";
    isActive = true;
    inputContent = "Test two way binding";

    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    tweet = {
        currentLikes: 8,
        iLike: true
    }

    voter = {
        voteCount: 19,
        myVote: -1
    }

    onClick($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    onDivClick() {
        console.log("Handle by Div.");
    }

    onVote($event) {
        console.log("Status :",$event);
        this.voter.myVote = $event.finalVote;
        console.log("Updated status to:",this.voter.myVote);
    }

}