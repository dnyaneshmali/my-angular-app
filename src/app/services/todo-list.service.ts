import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ToDoListService {
    constructor(private httpClient: HttpClient) {

    }


    getToDoList(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
    }
}