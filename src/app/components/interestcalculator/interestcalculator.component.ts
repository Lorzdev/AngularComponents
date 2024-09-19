import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestCalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  simpleInterest: number | null = null;

  // Function to calculate simple interest
  calculateInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {

      // Calculate Simple Interest using the formula: (P * R * T) / 100
      this.simpleInterest = (this.principal * this.rate * this.time) / 100;
    } else {
      this.simpleInterest = null;
    }
  }
}

export class InterestcalculatorComponent {
}
