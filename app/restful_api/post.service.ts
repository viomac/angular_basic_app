import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from 'angular2/core';
import {Post} from './post.js';

@Injectable()
export class PostService {
    
    private _url = "http://jsonplaceholder.typicode.com/posts";
    
    constructor(private _http: Http){

    }
    
    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }


    //We can return a promise instead an observable
    /*getPosts() : Promise<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }*/

    createPost(post: Post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}