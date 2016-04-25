import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'restful-api',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})

export class RestfulApiComponent implements OnInit {

    isLoading = true;

    constructor(private _postService: PostService){
        //this._postService.createPost({userId: 1, title: "a", body: "b"});
    }

    ngOnInit(){
        this._postService.getPosts()
        .subscribe(posts => {
            this.isLoading = false;
            console.log(posts[0].id);
        });
    }

    //If we receive a promise, we use "then" instead "subscribe"
    /*ngOnInit(){
        this._postService.getPosts()
        .then(posts => {
            this.isLoading = false;
            console.log(posts[0].id);
        });
    }*/
}