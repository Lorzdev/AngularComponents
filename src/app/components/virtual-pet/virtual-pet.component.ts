import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-virtual-pet',
  templateUrl: './virtual-pet.component.html',
  styleUrl: './virtual-pet.component.css'
})
export class VirtualPetComponent implements OnInit, OnDestroy {
  petName: string = 'Fluffy';
  happiness: number = 100;
  hunger: number = 100;
  petImage: string = 'assets/fluffy.png';
  intervalId: any;

  ngOnInit() {

    this.intervalId = setInterval(() => {
      this.decreaseHappiness();
      this.decreaseHunger();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  feedPet(): void {
    if (this.hunger < 100) {
      this.hunger += 10;
      this.happiness += 5;
      this.hunger = Math.min(this.hunger, 100);
    }
  }

  playWithPet(): void {
    if (this.happiness < 100) {
      this.happiness += 10;
      this.hunger -= 5;
      this.happiness = Math.min(this.happiness, 100);
      this.hunger = Math.max(this.hunger, 0);
    }
  }

  private decreaseHappiness(): void {
    this.happiness = Math.max(this.happiness - 5, 0);
  }

  private decreaseHunger(): void {
    this.hunger = Math.max(this.hunger - 5, 0);
  }
}
