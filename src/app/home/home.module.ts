import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToDoTabComponent } from './components/to-do-tab/to-do-tab.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { AddTodoButtonComponent } from './components/add-todo-button/add-todo-button.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToDoTabComponent,
    ToDoItemComponent,
    AddTodoButtonComponent,
    TodoFormComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
