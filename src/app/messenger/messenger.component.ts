import { Component, OnInit } from '@angular/core';
import { Button } from '../header/button';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

    buttons: Button[]

    constructor() { }

    ngOnInit() {
        this.buttons = [new Button("YAnSoN", "/"),
        new Button("me", "/user"),
        new Button("new post", "/post-edit"),
        new Button("messages", null),
        new Button("settings", null)];
    }

}
