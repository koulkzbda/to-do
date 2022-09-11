import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'add', component: TodoFormComponent
      },
      {
        path: 'update', component: TodoFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
