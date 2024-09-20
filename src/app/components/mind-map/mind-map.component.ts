import { Component } from '@angular/core';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrl: './mind-map.component.css'
})
export class MindMapComponent {
  newTopic: string = '';
  topics: string[] = [];


  addTopic(): void {
    if (this.newTopic.trim()) {
      this.topics.push(this.newTopic);
      this.newTopic = '';
    }
  }
}
