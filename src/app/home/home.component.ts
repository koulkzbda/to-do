import { ConfirmDialogService } from './../shared/services/confirm-dialog.service';
import { Todo } from './../shared/models/todo';
import { EventBusService } from './../core/services/event-bus.service';
import { StateService } from './../core/services/state.service';
import { TodoService } from './../core/services/to-do.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public notDoneTodos$ = this.state.todos$.pipe(
    map(todos => todos.filter(todo => !todo.done && !todo.hidden).sort((t1, t2) => t1.priority - t2.priority)),
  );
  public doneTodos$ = this.state.todos$.pipe(
    map(todos => todos.filter(todo => todo.done && !todo.hidden).sort((t1, t2) => t2?.doneAt?.getTime() ?? 0 - (t1?.doneAt?.getTime() ?? 0)))
  );
  public archivedTodos$ = this.state.todos$.pipe(
    map(todos => todos.filter(todo => todo.hidden).sort((t1, t2) => t2?.updatedAt?.getTime() ?? 0 - (t1?.updatedAt?.getTime() ?? 0)))
  );

  constructor(
    private todoService: TodoService,
    private state: StateService,
    private eventBus: EventBusService,
    private dialogService: ConfirmDialogService,
  ) { }

  ngOnInit(): void {
    if (!this.state.currentTodos?.length) this.todoService.getTodos().subscribe();
    this.onUpdateTodoStatus();
    this.onArchiveTodo();
    this.onRestoreTodo();
    this.onRemoveTodo();
  }

  private onUpdateTodoStatus(): void {
    this.eventBus.on('updateTodoStatus', (data: { done: boolean, todo: Todo }) => {
      this.todoService.updateTodoStatus(data.done, data.todo).subscribe();
    }
    );
  }

  private onArchiveTodo(): void {
    this.eventBus.on('archiveTodo', (todo: Todo) => {
      this.todoService.updateHiddenTodo(todo, true).subscribe();
    }
    );
  }

  private onRestoreTodo(): void {
    this.eventBus.on('restoreTodo', (todo: Todo) => {
      this.todoService.updateHiddenTodo(todo, false).subscribe();
    }
    );
  }

  private onRemoveTodo(): void {
    this.eventBus.on('removeTodo', (todo: Todo) => {
      const options = {
        title: 'Delete task ?',
        message: 'By deleting permanently this task you will not be able to recover it.',
        cancelText: 'CANCEL',
        confirmText: 'DELETE'
      };

      this.dialogService.open(options);

      this.dialogService.confirmed().subscribe(confirmed => {
        if (confirmed) {
          this.todoService.deleteTodo(todo).subscribe();
        }
      });
    }
    );
  }

}
