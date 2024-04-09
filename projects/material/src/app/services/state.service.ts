import { Injectable, inject, signal } from '@angular/core';
import { RepoPetsService } from './repo-pets.service';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private repo = inject(RepoPetsService);
  private _petState = signal<Pet[]>([]);
  public petState = this._petState.asReadonly();

  constructor() {}

  loadPets(): void {
    this.repo.getPets().subscribe((pets) => {
      this._petState.update(() => pets);
    });
  }

  add(petData: {
    name: string;
    breed: string;
    imageUrl: string;
    careGiver: string;
  }): void {
    const newPet: Pet = {
      id: crypto.randomUUID().toString(),
      name: petData.name,
      breed: petData.breed,
      imageUrl: petData.imageUrl,
      isAdopted: false,
      careGiver: petData.careGiver,
    };
    this._petState.update((pets) => [...pets, newPet]);
  }
}
