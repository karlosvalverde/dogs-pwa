import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dog } from '../models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private currentBreed = new BehaviorSubject('');

  constructor( private http: HttpClient ) { }

  getAllDogBreeds(): Observable<Response> {
    return this.http.get<Response>('https://dog.ceo/api/breeds/list');
  }

  getDogByBreed(breed: string): Observable<Dog> {
    return this.http.get<Dog>('https://dog.ceo/api/breed/' + breed + '/images/random/12');
  }

  sharedBreed = this.currentBreed.asObservable();

  setSharedBreed(breed: string) {
    this.currentBreed.next(breed);
  }

  isDetail(): Boolean {
    return true;
  }
}
