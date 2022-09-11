/* eslint-disable @typescript-eslint/member-ordering */

import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  public readonly todos$: Observable<Todo[]> = this.todos.asObservable();

  constructor() { }

  get currentTodos(): Todo[] { return this.todos.value; }

  public setTodos(todos: Todo[]): void {
    this.todos.next([...todos]);
  }

  public addTodo(todo: Todo): void {
    this.todos.next([...this.todos.value, todo]);
  }

  public removeTodo(todo: Todo): void {
    this.todos.next([...this.todos?.value?.filter(t => t.id !== todo.id)]);
  }

  public replaceTodo(todo: Todo): void {
    this.todos.next([...this.todos?.value?.filter(t => t.id !== todo.id), todo]);
  }

  public updateNotDoneTodos(todos: Todo[]): void {
    this.todos.next([...this.todos.value?.filter(t => t.done), ...todos]);
  }
}
