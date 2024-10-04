import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'task-item', component: TaskItemComponent },
];
