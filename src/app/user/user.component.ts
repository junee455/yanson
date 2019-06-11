import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Button } from '../header/button';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    userInfo: any; // info to post
    userData: any;
    menuShown = false;
    posts: any;

    buttons: Button[];


    pageStyle = {
        postStyle: "default-card",
        buttonStyle: "post-list-cards",
        wallStyle: "wall-grid"
    }

    pageStyleAlter = {
        postStyle: "default-post",
        buttonStyle: "post-list-sandwich",
        wallStyle: "wall-list"
    }

    togglePageStyle() {
        [this.pageStyle, this.pageStyleAlter] = [this.pageStyleAlter, this.pageStyle];
        console.log(document.cookie);
    }

    getUserData() {

        interface Response {
            text: string;
        }

        let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
        this.http.get("http://localhost:8000/api/user-data",
            { headers: httpHeaders, withCredentials: true }).subscribe((res: Response) => this.userData = res.text);
    }

    getPosts() {
        let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
        this.http.get("http://localhost:8000/api/posts",
            { headers: httpHeaders, withCredentials: true })
            .subscribe((res) => { this.posts = res; });
    }


    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.http.get("http://localhost:8000/api/check-auth",
            {
                observe: 'response',
                withCredentials: true
            })
            .subscribe(null, // any non 200 status is treated as an error
                res => { this.router.navigate(["/sign-in"]) });
    }

    ngOnInit() {
        this.buttons = [new Button("YAnSoN", "/"),
        new Button("me", "/user"),
        new Button("new post", "/post-edit"),
        new Button("messages", "/messenger"),
        new Button("settings", null)];
    }

    ngAfterViewInit() {
        this.getUserData();
        this.getPosts();
    }

}
