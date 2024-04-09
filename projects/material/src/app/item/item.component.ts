import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule],
  template: ` <mat-card class="card-container">
    <img src="{{ pet().imageUrl }}" alt="pet image" />
    <mat-card-content>Id: {{ pet().id }}</mat-card-content>
    <mat-card-content>Name: {{ pet().name }}</mat-card-content>
    <mat-card-content>Breed: {{ pet().breed }}</mat-card-content>
    <mat-card-content>Caregiver: {{ pet().careGiver }}</mat-card-content>
  </mat-card>`,
  styles: ``,
})
export class ItemComponent {
  pet = input<Pet>({} as Pet);
}
