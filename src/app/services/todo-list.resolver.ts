import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ToDoListService } from "./todo-list.service";

@Injectable({providedIn: 'root'})

export class ToDoResolver implements Resolve<any> {
    constructor(private toDoListService: ToDoListService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let res = this.toDoListService.getToDoList();
        return res;
    }
}