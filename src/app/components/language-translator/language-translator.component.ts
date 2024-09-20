import { Component } from '@angular/core';

@Component({
  selector: 'app-language-translator',
  templateUrl: './language-translator.component.html',
  styleUrl: './language-translator.component.css'
})
export class LanguageTranslatorComponent {
  textToTranslate: string = '';
  selectedLanguage: string = 'en';
  translatedText: string | null = null;


  translateText(): void {

    const translations: { [key: string]: { [key: string]: string } } = {
      en: {
        "Hello": "Hello",
        "Goodbye": "Goodbye",
        "How are you?": "How are you?"
      },
      tl: {
        "Hello": "Kamusta",
        "Goodbye": "Paalam",
        "How are you?": "Kamusta ka?"
      }
    };

    this.translatedText = this.textToTranslate.split(' ').map(word => {
      return translations[this.selectedLanguage][word] || word;
    }).join(' ');
  }
}
