import { Component } from '@angular/core';

@Component({
  selector: 'app-day-difference-calculator',
  templateUrl: './day-difference-calculator.component.html',
  styleUrl: './day-difference-calculator.component.css'
})
export class DayDifferenceCalculatorComponent {
  startDate: string | null = null;
  endDate: string | null = null;
  daysDifference: number | null = null;


  calculateDifference(): void {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      const differenceInTime = end.getTime() - start.getTime();


      this.daysDifference = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    } else {
      this.daysDifference = null;
    }
  }
}
