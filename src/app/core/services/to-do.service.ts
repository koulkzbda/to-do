import { StateService } from './state.service';
import { TODOS } from './../../../../mock/mock-data';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private state: StateService
  ) { }

  public getTodos(): Observable<Todo[]> {
    return of(TODOS as Todo[])
      .pipe(
        delay(400),
        tap(todos => this.state.setTodos(todos)),
      );
  }

  public updateTodoStatus(done: boolean, todo: Todo): Observable<Todo> {
    const updatedTodo = { ...todo, done, updatedAt: new Date(), doneAt: done ? new Date() : null };

    return of(updatedTodo as Todo).pipe(
      delay(400),
      tap(t => this.state.replaceTodo(t)),
    );
  }

  public updateTodo(todoForm: Partial<Todo>, todo: Todo): Observable<Todo> {
    const updatedTodo = { ...todo, ...todoForm, updatedAt: new Date() };

    return of(updatedTodo as Todo).pipe(
      delay(400),
      tap(t => this.state.replaceTodo(t)),
    );
  }

  public addTodo(todo: Partial<Todo>): Observable<Todo> {
    const id = Math.random().toString(36).slice(2, 7);
    const createdTodo = { ...todo, id, done: false, updatedAt: new Date(), createdAt: new Date(), hidden: false };

    return of(createdTodo as Todo).pipe(
      delay(400),
      tap(t => this.state.addTodo(t)),
    );
  }

  public updateNotDoneTodosPriority(todos: Todo[]): Observable<Todo[]> {
    const notDoneTodos = todos.filter(t => !t.done);

    return of(notDoneTodos).pipe(
      delay(400),
      tap(updatedTodos => this.state.updateNotDoneTodos(updatedTodos)),
    )
  }

  public updateHiddenTodo(todo: Todo, hidden: boolean): Observable<Todo> {
    const updatedTodo = { ...todo, hidden, updatedAt: new Date() };

    return of(updatedTodo as Todo).pipe(
      delay(400),
      tap(t => this.state.replaceTodo(t)),
    );
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    return of(todo).pipe(
      delay(400),
      tap(t => this.state.removeTodo(t)),
    );
  }

}
