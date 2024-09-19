import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationCheckerComponent {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  resultMessage: string | null = null;

  checkIfMultiple(): void {
    if (this.firstNumber !== null && this.secondNumber !== null && this.secondNumber !== 0) {

      if (this.firstNumber % this.secondNumber === 0) {
        this.resultMessage = `${this.firstNumber} is a multiple of ${this.secondNumber}.`;
      } else {
        this.resultMessage = `${this.firstNumber} is not a multiple of ${this.secondNumber}.`;
      }
    } else {

      this.resultMessage = 'Please enter valid numbers. The second number cannot be zero.';
    }
  }
}
