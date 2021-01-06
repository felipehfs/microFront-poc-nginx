import { TodosServiceService } from './../todos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: string[] = []
  constructor(private todoService: TodosServiceService) { }

  ngOnInit(): void {
    this.todoService
    .getTask()
    .subscribe(tasks => this.tasks = tasks);
  }

}
