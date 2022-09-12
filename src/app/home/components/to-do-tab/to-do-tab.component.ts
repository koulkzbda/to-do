import { TodoService } from './../../../core/services/to-do.service';
import { Todo } from 'src/app/shared/models/todo';
import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do-tab',
  templateUrl: './to-do-tab.component.html',
  styleUrls: ['./to-do-tab.component.scss']
})
export class ToDoTabComponent {

  @Input() todos: Todo[] = [];
  @Input() dragDropEnabled = true;

  constructor(
    private todoService: TodoService
  ) { }

  public drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);

    event?.container?.data?.forEach((todo, index) => {
      todo.priority = index;
      if (index === this.todos.length - 1) {
        this.todoService.updateNotDoneTodosPriority(event?.container?.data).subscribe();
      }
    });
  }
}
