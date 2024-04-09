import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepoPetsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  constructor() {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }
}
