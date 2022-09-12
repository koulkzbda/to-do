import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo-button',
  templateUrl: './add-todo-button.component.html',
  styleUrls: ['./add-todo-button.component.scss']
})
export class AddTodoButtonComponent {

  constructor(
    private router: Router,
  ) { }

  public goToAddTodo(): void {
    const state = {
      cardTitle: 'New task',
      cardSubTitle: 'What are you planning to do ?',
    };

    this.router.navigate(['app', 'add'], { state });
  }
}
