import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/Observable';

@Injectable()
export class AppService {

    Base_URL: string;

    constructor(private http: HttpClient) {
        this.Base_URL = '../assets/data'
    }

    getEnglish() {
        return this.http.get(`${this.Base_URL}/en_US.json`).pipe(catchError(this.handleError));
    }

    getLatin() {
        return this.http.get(`${this.Base_URL}/la_PG.json`).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occured: ', error.error.message);
        } else {
            console.log('Backend returned code: ', error.status);
        }
        return observableThrowError(error);
    }
}