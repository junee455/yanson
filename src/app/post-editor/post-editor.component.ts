import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Decorations } from './post';
import { Button } from '../header/button';
import * as $ from 'jquery';

@Component({
    selector: 'app-post-editor',
    templateUrl: './post-editor.component.html',
    styleUrls: ['./post-editor.component.scss']
})

/*
  
  angular component lifecycle
  
  OnChanges
  OnInit
  Docheck
  AfterContentInit
  AfterContentChecked
  AfterViewInit
  AfterViewChecked
  |
  +<--------------------+
  |                     |
  DoCheck               |
  AfterContentChecked   |
  AfterViewChecked  ----+
  |
  onDestroy
  
  post process lifecycle
  - handle selection
  
*/

export class PostEditorComponent implements OnInit {

    buttons: Button[];

    buttonBold = "";
    buttonItalic = "";
    buttonUnderline = "";
    buttonStrike = "";

    activeModyfier: Decorations[] = [];

    insertPic(e: MouseEvent) {

    }

    indent(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("indent", false);
    }

    outdent(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("outdent", false);
    }

    justifyRight(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("justifyRight", false);
    }

    justifyCenter(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("justifyCenter", false);
    }

    justifyLeft(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("justifyLeft", false);
    }

    insertOl(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("insertOrderedList", false);
    }


    insertUl(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("insertUnorderedList", false);
    }

    toggleBold(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("bold", false);
        this.checkDecorations();
    }

    toggleItalic(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("italic", false);
        this.checkDecorations();
    }

    toggleUnderline(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("underline", false);
        this.checkDecorations();
    }

    toggleStrike(e: MouseEvent) {
        e.preventDefault();
        document.execCommand("strikeThrough", false);
        this.checkDecorations();
    }


    checkDecorations() {
        this.buttonBold =
            this.buttonItalic =
            this.buttonStrike =
            this.buttonUnderline = "tool-bar-button";
        if (document.queryCommandValue("Bold") === "true") {
            this.buttonBold = "tool-bar-button pressed";
        }
        if (document.queryCommandValue("Underline") === "true") {
            this.buttonUnderline = "tool-bar-button pressed";
        }
        if (document.queryCommandValue("Italic") === "true") {
            this.buttonItalic = "tool-bar-button pressed";
        }
        if (document.queryCommandValue("StrikeThrough") === "true") {
            this.buttonStrike = "tool-bar-button pressed";
        }
    }

    keyPress(event: Event) {
        if ((<KeyboardEvent>event).getModifierState("Control")) {
            let executed = true;
            if ("kjerlbui".split('').includes((<KeyboardEvent>event).key)) {
                event.preventDefault();
                switch ((<KeyboardEvent>event).key) {
                    case "k": {
                        document.execCommand("strikeThrough", false);
                        break;
                    }
                    case "j": {
                        document.execCommand("justifyFull", false);
                        break;
                    }
                    case "e": {
                        document.execCommand("justifyCenter", false);
                        break;
                    }
                    case "r": {
                        document.execCommand("justifyRight", false);
                        break;
                    }
                    case "l": {
                        document.execCommand("justifyLeft", false);
                        break;
                    }
                    case "b": {
                        document.execCommand("bold", false);
                        break;
                    }
                    case "u": {
                        document.execCommand("underline", false);
                        break;
                    }
                    case "i": {
                        document.execCommand("italic", false);
                        break;
                    }
                }
            }
        } else if ((<KeyboardEvent>event).key == "Tab") {
            event.preventDefault();
            if (document.getSelection().toString().length)
                if ((<KeyboardEvent>event).shiftKey)
                    document.execCommand("outdent", false);
                else
                    document.execCommand("indent", false);
            else
                document.execCommand("insertText", false, "\t");
        }
        this.checkDecorations();
    }

    ngOnInit() {
        this.buttons = [new Button("YAnSoN", "/"),
        new Button("me", "/user"),
        new Button("new post", null),
        new Button("messages", "/messenger"),
        new Button("settings", null)];
    }

    ngDoCheck() {
    }

    ngAfterContentChecked() {
    }


    ngAfterViewChecked() {
        $("#edit-area").focus();
    }


    ngAfterViewInit() {

        // insert as plain text
        // @ts-ignore
        $("#edit-area").on("paste", function(e: ClipboardEvent) {

            // get text representation of clipboard

            // since 'originalEvent' isn't defined in lib.dom.d.ts
            // @ts-ignore
            let text = (e.originalEvent || e).clipboardData.getData('text/plain');

            if (text !== "") e.preventDefault();

            // insert text manually
            document.execCommand("insertHTML", false, text);
        });
        $("#edit-area").focus();
        document.execCommand("justifyLeft");
    }

    constructor() {
        this.buttonBold =
            this.buttonItalic =
            this.buttonUnderline =
            this.buttonStrike = "tool-bar-button";

    }
};

