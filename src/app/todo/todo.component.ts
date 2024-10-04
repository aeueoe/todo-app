import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AddTaskComponent,
    TaskItemComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  public userName = 'Nina';
  tasks = [
    { id: 1, text: 'Design system update', completed: false },
    { id: 2, text: 'Design system update', completed: false },
    {
      id: 3,
      text: 'Design system update: The latest iteration introduces a refined set of components and patterns that enhance both usability and consistency across our digital platforms. We’ve incorporated feedback from various teams to ensure the design system remains intuitive and versatile, supporting a wider range of use cases while adhering to our brand guidelines.',
      completed: false,
    },
  ];

  private dialog = inject(MatDialog);

  isOverlayVisible = false;

  constructor() {
    console.log('Tasks list:', this.tasks);
  }

  openAddTaskDialog(): void {
    this.isOverlayVisible = true;
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '390px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks.push({
          id: this.tasks.length + 1,
          text: result,
          completed: false,
        });
      }
      this.isOverlayVisible = false;
    });
  }

  onEdit(task: any) {
    this.isOverlayVisible = true;
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '390px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        task.text = result;
      }
      this.isOverlayVisible = false;
    });
  }

  onTaskComplete(task: any) {
    task.completed = !task.completed;
  }

  onDelete(task: any) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
