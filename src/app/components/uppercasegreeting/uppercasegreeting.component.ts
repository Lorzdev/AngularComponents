import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercaseGreetingComponent {
  userName: string = '';
  uppercaseName: string | null = null;

  // Function to convert the name to uppercase
  convertToUppercase(): void {
    if (this.userName) {
      this.uppercaseName = this.userName.toUpperCase();
    } else {
      this.uppercaseName = null;
    }
  }
}
