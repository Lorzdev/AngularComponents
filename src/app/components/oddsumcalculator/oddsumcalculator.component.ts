import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddSumCalculatorComponent {
  maxNumber: number | null = null;
  oddSum: number | null = null;


  calculateOddSum(): void {
    this.oddSum = null;

    if (this.maxNumber !== null && this.maxNumber >= 0) {
      let sum = 0;
      for (let i = 1; i <= this.maxNumber; i += 2) {
        sum += i;
      }
      this.oddSum = sum;
    }
  }
}

export class OddsumcalculatorComponent {
}
