import { Router } from '@angular/router';
import { EventBusService } from './../../../core/services/event-bus.service';
import { Todo } from 'src/app/shared/models/todo';
import { Component, Input, OnInit } from '@angular/core';
import { EventData } from 'src/app/shared/models/event-data';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {

  @Input() todo: Todo;

  constructor(
    private eventBus: EventBusService,
    private router: Router,
  ) { }

  public updateTodoStatus(done: boolean, todo: Todo) {
    this.eventBus.emit(new EventData<{ done: boolean, todo: Todo }>('updateTodoStatus', { done, todo }));
  }

  public archive(todo: Todo): void {
    this.eventBus.emit(new EventData<Todo>('archiveTodo', todo));
  }

  public restore(todo: Todo): void {
    this.eventBus.emit(new EventData<Todo>('restoreTodo', todo));
  }

  public remove(todo: Todo): void {
    this.eventBus.emit(new EventData<Todo>('removeTodo', todo));
  }

  public goToUpdate(todo: Todo): void {
    const state = {
      cardTitle: 'Edit task',
      cardSubTitle: 'What are you planning to do ?',
      todo,
    };

    this.router.navigate(['app', 'update'], { state });
  }
}
