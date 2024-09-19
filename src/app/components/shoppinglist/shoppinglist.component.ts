import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppingListComponent {
  shoppingList: string[] = [];
  newItem: string = '';

  // Function to add a new item to the list
  addItem(): void {
    if (this.newItem.trim()) {
      this.shoppingList.push(this.newItem);
      this.newItem = '';
    }
  }

  // Function to remove an item from the list by index
  removeItem(index: number): void {
    this.shoppingList.splice(index, 1);
  }
}
