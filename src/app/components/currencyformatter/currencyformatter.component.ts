import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyFormatterComponent {
  amount: number | null = null;
  currencyType: string = 'USD';
  formattedCurrency: string | null = null;

  // Function to format the amount as currency
  formatCurrency(): void {
    if (this.amount !== null) {
      let options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: this.currencyType
      };

      try {
        this.formattedCurrency = new Intl.NumberFormat('en-US', options).format(this.amount);
      } catch (e) {
        this.formattedCurrency = 'Invalid currency format';
      }
    } else {
      this.formattedCurrency = null;
    }
  }
}
