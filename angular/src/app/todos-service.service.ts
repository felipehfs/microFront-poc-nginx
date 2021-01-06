import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  tasks: string[] = []
  constructor() { }

  addTask(task: string) {
    this.tasks.push(task);
  }

  getTask(): Observable<string[]> {
    return of(this.tasks);
  }
}
