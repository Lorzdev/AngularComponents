import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundInterestCalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number = 1;
  compoundInterest: number | null = null;
  totalAmount: number | null = null;

  // Function to calculate compound interest
  calculateCompoundInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      // Convert rate from percentage to decimal
      const decimalRate = this.rate / 100;

      // Calculate total amount using compound interest formula: A = P(1 + R/n)^(n*T)
      this.totalAmount = this.principal * Math.pow((1 + decimalRate / this.frequency), this.frequency * this.time);

      // Calculate compound interest
      this.compoundInterest = this.totalAmount - this.principal;
    } else {
      this.compoundInterest = null;
      this.totalAmount = null;
    }
  }
}
