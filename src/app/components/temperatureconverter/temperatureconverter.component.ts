import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureConverterComponent {
  temperature: number | null = null;             // Stores the user input temperature
  convertedTemperature: number | null = null;    // Stores the converted temperature
  conversionType: string = 'CtoF';               // Stores the conversion type: Celsius to Fahrenheit or vice versa

  // Function to convert temperature
  convertTemperature(): void {
    if (this.temperature !== null) {
      if (this.conversionType === 'CtoF') {
        // Convert Celsius to Fahrenheit
        this.convertedTemperature = (this.temperature * 9 / 5) + 32;
      } else if (this.conversionType === 'FtoC') {
        // Convert Fahrenheit to Celsius
        this.convertedTemperature = (this.temperature - 32) * 5 / 9;
      }
    } else {
      this.convertedTemperature = null;
    }
  }
}
