import { Component } from "@angular/core";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { ToDoListService } from "../services/todo-list.service";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-debounce',
    templateUrl: 'debounce.component.html',
    styleUrl: 'debounce.component.css',
    imports: [ReactiveFormsModule]
})

export class DebounceComponent {
    searchControl = new FormControl('');
    constructor(private toDoListService: ToDoListService) {}


    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(3000),
            distinctUntilChanged(),
            switchMap(value => 
                this.toDoListService.getToDoList()
            )
        ).subscribe(res => {
            console.log('res', res);
        })
        
    }
}