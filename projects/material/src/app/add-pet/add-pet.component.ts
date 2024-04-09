import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-add-pet',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="addPet()" class="form">
      <input formControlName="name" placeholder="Name" />

      <input formControlName="breed" placeholder="Breed" />

      <input formControlName="imageUrl" placeholder="Image Url" />

      <input formControlName="careGiver" placeholder="Caregiver" />

      <button type="submit">Add Pet</button>
    </form>
  `,
  styles: `
    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export class AddPetComponent {
  private fb = inject(FormBuilder);
  petsService = inject(StateService);
  formGroup = this.fb.group({
    name: '',
    breed: '',
    imageUrl: '',
    careGiver: '',
  });
  addPet() {
    const data = {
      name: this.formGroup.get('name')?.value as string,
      breed: this.formGroup.get('breed')?.value as string,
      imageUrl: this.formGroup.get('imageUrl')?.value as string,
      careGiver: this.formGroup.get('careGiver')?.value as string,
    };
    this.petsService.add(data);
    this.formGroup.reset();
  }
}
