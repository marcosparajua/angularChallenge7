import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-home></app-home>
    <app-add-pet></app-add-pet>
    <app-list></app-list>
  `,
  styles: ``,
  imports: [RouterOutlet, HomeComponent, AddPetComponent, ListComponent],
})
export class AppComponent {
  title = 'material';
}
