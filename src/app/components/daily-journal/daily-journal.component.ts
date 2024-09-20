import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-journal',
  templateUrl: './daily-journal.component.html',
  styleUrl: './daily-journal.component.css'
})
export class DailyJournalComponent {
  entry: string = '';
  entries: string[] = [];

  // Method to save the journal entry
  saveEntry(): void {
    if (this.entry.trim()) {
      this.entries.push(this.entry);
      this.entry = '';
    }
  }
}
