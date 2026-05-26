import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrl: 'todo-list.component.css',
  imports: [CommonModule],
})
export class ToDoListComponent implements OnInit {
  toDoList!: [{
    userId: number,
    title: string
  }];
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('rdata', data[0]);
      this.toDoList = data[0];
    });
  }
}
