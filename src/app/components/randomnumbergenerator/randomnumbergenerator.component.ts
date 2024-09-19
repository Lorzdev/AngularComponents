import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomNumberGeneratorComponent {
  minValue: number | null = null;
  maxValue: number | null = null;
  randomNumber: number | null = null;


  generateRandomNumber(): void {
    if (this.minValue !== null && this.maxValue !== null && this.minValue <= this.maxValue) {

      this.randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    } else {

      this.randomNumber = null;
      alert('Please enter a valid range with min <= max.');
    }
  }
}
