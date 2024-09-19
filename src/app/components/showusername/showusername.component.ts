import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrls: ['./showusername.component.css'],
})
export class ShowUsernameComponent {
  username: string = '';
  message: string = '';

  // Method to display the username
  displayUsername(): void {
    this.message = `Hello, ${this.username}!`;
  }
}

export class ShowusernameComponent {
}
