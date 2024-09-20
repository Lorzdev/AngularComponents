import { Component } from '@angular/core';

@Component({
  selector: 'app-speed-converter',
  templateUrl: './speed-converter.component.html',
  styleUrl: './speed-converter.component.css'
})
export class SpeedConverterComponent {
  kmh: number | null = null;
  mph: number | null = null;


  private readonly conversionFactor = 0.621371;


  convertToMph(): void {
    if (this.kmh !== null && this.kmh >= 0) {
      this.mph = parseFloat((this.kmh * this.conversionFactor).toFixed(2));
    } else {
      this.mph = null;
    }
  }
}
