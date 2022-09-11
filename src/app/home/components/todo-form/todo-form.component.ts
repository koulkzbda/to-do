import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/to-do.service';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  public cardTitle: string;
  public cardSubTitle: string;
  private todo: Todo;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodoService,
  ) { }

  get title(): FormControl { return this.form.get('title') as FormControl; }

  ngOnInit(): void {
    const state = history.state;

    this.cardTitle = state['cardTitle'];
    this.cardSubTitle = state['cardSubTitle'];
    this.todo = state['todo'] ?? null;
    this.initForm(state['todo'] ?? null);
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    const todo$ = this.todo ? this.todoService.updateTodo(this.form.value, this.todo) : this.todoService.addTodo(this.form.value);
    todo$.subscribe(_ => this.cancel());
  }

  public cancel(): void {
    this.router.navigate(['/app']);
  }

  private initForm(todo?: Todo): void {
    this.form = this.fb.group({
      title: [todo?.title ?? '', [Validators.required]],
      content: todo?.content ?? ''
    });
  }
}
