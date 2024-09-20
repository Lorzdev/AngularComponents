import { Component } from '@angular/core';

@Component({
  selector: 'app-pythagorean-theorem-solver',
  templateUrl: './pythagorean-theorem-solver.component.html',
  styleUrl: './pythagorean-theorem-solver.component.css'
})
export class PythagoreanTheoremSolverComponent {
  sideA: number | null = null;  // Length of side A
  sideB: number | null = null;  // Length of side B
  hypotenuse: number | null = null;  // Length of the hypotenuse


  calculateHypotenuse(): void {
    if (this.sideA !== null && this.sideB !== null && this.sideA > 0 && this.sideB > 0) {
      // Calculate hypotenuse using the formula: c = √(a² + b²)
      this.hypotenuse = Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2));
    } else {
      this.hypotenuse = null;  // Reset result if inputs are invalid
    }
  }
}
