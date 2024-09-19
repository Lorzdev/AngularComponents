import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialCalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  // Function to calculate the factorial of the input number
  calculateFactorial(): void {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.calculateFactorialRecursive(this.number);
    } else {
      this.factorial = null;
    }
  }

  // Recursive function to calculate factorial
  private calculateFactorialRecursive(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.calculateFactorialRecursive(n - 1);
  }
}
