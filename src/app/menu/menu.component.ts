import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menuShown = false;


    gotoPostEditor() {
        // mock function yet
        // just adds new post to database

        // let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
        // this.http.post("http://localhost:8000/api/new-post", { author: 1, data: "new post from ng client" },
        // { headers: httpHeaders, withCredentials: true }).subscribe(() => this.getPosts());

        this.router.navigate(["/post-edit"]);
    }

    gotoMessages() {
        this.router.navigate(["/messenger"]);
    }

    gotoUser() {
        this.router.navigate(["/user"]);
    }

    logout() {
        let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
        this.http.get("http://localhost:8000/api/logout",
            { headers: httpHeaders, withCredentials: true }).subscribe(() => { this.router.navigate(["/sign-in"]) });
    }


    toggleMenu() {

        // if (this.menuShown) {
        //     document.getElementsByClassName("menu-bar-hidden")[0].className = "menu-bar";
        //     document.getElementsByClassName("menu-button")[0].getElementsByClassName("mock-button")[0].classList.remove("mock-button");
        //     document.getElementsByClassName("sandwich")[0].classList.toggle("back-icon");
        //     this.menuShown = false;
        // } else {
        //     document.getElementsByClassName("menu-bar-hidden")[0].classList.toggle("menu-bar");
        //     document.getElementsByClassName("menu-button")[0].getElementsByClassName("mock-button")[0].classList.toggle("mock-button");
        //     document.getElementsByClassName("sandwich")[0].classList.toggle("back-icon");
        //     this.menuShown = true;
        // }
        if (this.menuShown) {
            document.getElementsByClassName("menu-bar")[0].className = "menu-bar-hidden";
            document.getElementsByClassName("back-icon")[0].className = "sandwich";
            this.menuShown = false;
        } else {
            document.getElementsByClassName("menu-bar-hidden")[0].className = "menu-bar";
            document.getElementsByClassName("sandwich")[0].className = "back-icon";
            this.menuShown = true;
        }
        document.getElementsByClassName("menu-button")[0].firstElementChild.classList.toggle("mock-button");

    }

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    ngOnInit() {
    }

}
