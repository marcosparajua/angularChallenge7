import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule],
  template: `<mat-toolbar> <span>My Pets</span> </mat-toolbar> `,
  styles: ``,
})
export class HomeComponent {}
