import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonacciGeneratorComponent {
  n: number | null = null;
  fibonacciSequence: number[] = [];

  // Function to generate the Fibonacci sequence
  generateFibonacci(): void {
    this.fibonacciSequence = [];
    if (this.n !== null && this.n > 0) {
      let a = 0, b = 1;
      this.fibonacciSequence.push(a);
      if (this.n > 1) {
        this.fibonacciSequence.push(b);
        for (let i = 2; i < this.n; i++) {
          let next = a + b;
          this.fibonacciSequence.push(next);
          a = b;
          b = next;
        }
      }
    }
  }
}
