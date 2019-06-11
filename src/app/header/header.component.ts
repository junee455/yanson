import { Input, Component, OnInit } from '@angular/core';
import { Button } from './button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() buttons: Button[];
    @Input() rightButtons: Button[];


    constructor(private router: Router
    ) { }

    goto(ref: string) {
        this.router.navigate([ref]);
    }

    ngOnInit() {
    }

}
