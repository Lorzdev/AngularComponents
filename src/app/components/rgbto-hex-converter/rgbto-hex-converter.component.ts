import { Component } from '@angular/core';

@Component({
  selector: 'app-rgbto-hex-converter',
  templateUrl: './rgbto-hex-converter.component.html',
  styleUrl: './rgbto-hex-converter.component.css'
})
export class RGBtoHexConverterComponent {
  red: number | null = null;   // Red value (0-255)
  green: number | null = null; // Green value (0-255)
  blue: number | null = null;  // Blue value (0-255)
  hexCode: string | null = null; // The converted hex color code

  // Function to convert RGB to Hex
  convertToHex(): void {
    if (this.isValidRGB(this.red) && this.isValidRGB(this.green) && this.isValidRGB(this.blue)) {
      const r = this.convertSingleToHex(this.red!);
      const g = this.convertSingleToHex(this.green!);
      const b = this.convertSingleToHex(this.blue!);
      this.hexCode = `#${r}${g}${b}`;
    } else {
      this.hexCode = null; // Invalid input case
    }
  }

  // Helper function to check if the RGB value is valid (0-255)
  private isValidRGB(value: number | null): boolean {
    return value !== null && value >= 0 && value <= 255;
  }

  // Helper function to convert a single RGB value to a 2-character hex code
  private convertSingleToHex(value: number): string {
    const hex = value.toString(16);  // Convert to hex
    return hex.length === 1 ? `0${hex}` : hex; // Ensure it's always 2 characters
  }
}
