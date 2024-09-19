import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessNumberGameComponent {
  targetNumber: number = this.generateRandomNumber();
  userGuess: number | null = null;
  feedback: string | null = null;
  gameOver: boolean = false;

  // Function to generate a random number between 1 and 100
  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to check the user's guess
  checkGuess(): void {
    if (this.userGuess === null) {
      this.feedback = 'Please enter a guess.';
      return;
    }

    if (this.userGuess < this.targetNumber) {
      this.feedback = 'Too low! Try again.';
    } else if (this.userGuess > this.targetNumber) {
      this.feedback = 'Too high! Try again.';
    } else {
      this.feedback = 'Congratulations! You guessed the number!';
      this.gameOver = true;
    }
  }

  // Function to restart the game
  restartGame(): void {
    this.targetNumber = this.generateRandomNumber();
    this.userGuess = null;
    this.feedback = null;
    this.gameOver = false;
  }
}

export class GuessnumbergameComponent {
}
