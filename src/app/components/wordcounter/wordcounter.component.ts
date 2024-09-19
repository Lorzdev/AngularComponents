import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordCounterComponent {
  inputText: string = '';   // Stores the user input text
  wordCount: number | null = null;  // Stores the word count

  // Function to count the number of words in the input text
  countWords(): void {
    if (this.inputText.trim()) {
      // Split the input text by spaces and filter out empty strings
      this.wordCount = this.inputText.trim().split(/\s+/).length;
    } else {
      this.wordCount = 0;
    }
  }
}
