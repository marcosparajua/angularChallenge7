import { Component, inject } from '@angular/core';

import { ItemComponent } from '../item/item.component';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <div>
      @for (pet of petsService.petState(); track $index) {
        <app-item [pet]="pet"></app-item>
      }
    </div>
  `,
  styles: ``,
})
export class ListComponent {
  petsService = inject(StateService);
}
