import { TodosServiceService } from './../todos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task = '';
  constructor(private todoService: TodosServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.addTask(this.task);
    this.task = '';
  }
}
