import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BMISolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  bmiCategory: string = '';

  // Function to calculate BMI
  calculateBMI(): void {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);

      // Determine BMI category
      if (this.bmi < 18.5) {
        this.bmiCategory = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiCategory = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiCategory = 'Overweight';
      } else if (this.bmi >= 30) {
        this.bmiCategory = 'Obesity';
      }
    } else {
      this.bmi = null;
      this.bmiCategory = 'Please enter valid height and weight values.';
    }
  }
}
