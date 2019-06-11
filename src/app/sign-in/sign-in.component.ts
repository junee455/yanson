import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

    email: string
    password: string
    dataChecked = false

    responseHandler(status: number): void {
        if (status == 401) {
            document.getElementById('wrong-pass').classList.remove('transparent');
        } else if (status == 200) {
            this.router.navigate(['/user']);
        }
    }

    submit() {
        // let headers = new HttpHeaders({
        //     'Content-Type': 'application/json'
        // });
        let resp;
        this.http.post("http://localhost:8000/api/login",
            { email: this.email, password: this.password },
            {
                observe: 'response',
                withCredentials: true
            })
            .subscribe(resp => this.responseHandler(resp.status),
                resp => this.responseHandler(resp.status)); // any response code is treated as error

    }


    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.http.get("http://localhost:8000/api/check-auth",
            {
                observe: 'response',
                withCredentials: true
            }).subscribe(res => {
            this.dataChecked = true;
                if (res.status == 200) this.router.navigate(["/user"]);
            });
    }

    ngOnInit() {

    };

}
