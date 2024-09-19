import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomQuoteDisplayComponent {
  // List of quotes
  private quotes: string[] = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out. —Eleanor Roosevel",

  ];

  randomQuote: string | null = null;

  // Function to display a random quote from the list
  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}

export class RandomquotedisplayComponent {
}
