import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordShufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';


  shuffleWord(): void {
    if (this.inputWord) {
      this.shuffledWord = this.inputWord
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('');
    }
  }
}

export class WordshufflerComponent {
}
