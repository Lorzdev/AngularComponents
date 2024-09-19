import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodoManagerComponent {
  tasks: string[] = [];
  newTask: string = '';

  // Function to add a new task to the list
  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  // Function to remove a task from the list by index
  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
