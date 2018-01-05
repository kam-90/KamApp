import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromevent';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {
  private localStorageKey = "posts";
  private postsUrl = 'http://localhost:3000/api/posts'; // change to '/api/posts'

  constructor( private http: HttpClient ) { }

  clear() {
    localStorage.clear();
  }

  getPosts() {
    /*let lsData = localStorage.getItem(this.localStorageKey);
    let ret = null;
    if (lsData) {
      return of(JSON.parse(lsData));
    } else {
      return of([]);
    }*/
    return this.http.get(this.postsUrl).pipe(
      tap((response) => console.log("from pipe", response)),
      tap((response) => console.log("from pipe", response))
      
    
    );
  }

  addPost(post) {
    /*let posts = (localStorage[this.localStorageKey]) ? localStorage[this.localStorageKey] : "[]";
    posts = JSON.parse(posts);
    console.log(post, posts);
    posts.push(post);
    localStorage.setItem(this.localStorageKey, JSON.stringify(posts, null, 2));*/

    this.http.post(this.postsUrl, post, httpOptions).pipe(
      tap((response) => console.log("from pipe", response))
    ).subscribe((response) => console.log("from subscribe", response));
  }
}
