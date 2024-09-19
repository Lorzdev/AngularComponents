import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernameValidatorComponent {
  username: string = '';
  validationMessage: string = '';


  validateUsername(): void {
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{4,}$/;

    if (this.username.match(usernamePattern)) {
      this.validationMessage = 'Username is valid.';
    } else {
      this.validationMessage = 'Invalid username. It must be at least 5 characters long, alphanumeric, and start with a letter.';
    }
  }
}
