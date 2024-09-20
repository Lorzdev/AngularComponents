import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-splitter',
  templateUrl: './expense-splitter.component.html',
  styleUrl: './expense-splitter.component.css'
})
export class ExpenseSplitterComponent {
  totalAmount: number = 0;
  numberOfPeople: number = 1;
  shares: number[] = [];


  calculateShares(): void {
    this.shares = [];
    if (this.numberOfPeople > 0) {
      const share = this.totalAmount / this.numberOfPeople;
      for (let i = 0; i < this.numberOfPeople; i++) {
        this.shares.push(share);
      }
    }
  }
}
