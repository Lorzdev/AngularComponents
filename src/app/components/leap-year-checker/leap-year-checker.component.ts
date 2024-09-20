import { Component } from '@angular/core';

@Component({
  selector: 'app-leap-year-checker',
  templateUrl: './leap-year-checker.component.html',
  styleUrl: './leap-year-checker.component.css'
})
export class LeapYearCheckerComponent {
  year: number | null = null;
  resultMessage: string | null = null;

  // Function to check if the input year is a leap year
  checkLeapYear(): void {
    if (this.year !== null && this.year > 0) {
      if ((this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0)) {
        this.resultMessage = `${this.year} is a leap year.`;
      } else {
        this.resultMessage = `${this.year} is not a leap year.`;
      }
    } else {
      this.resultMessage = 'Please enter a valid year.';
    }
  }
}
