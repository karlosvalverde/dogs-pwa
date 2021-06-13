import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog.interface';
import { Response } from 'src/app/models/response.interface';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dog-breeds',
  templateUrl: './dog-breeds.component.html',
  styleUrls: ['./dog-breeds.component.css']
})
export class DogBreedsComponent implements OnInit {

  dog: Dog;
  dogs: Dog[] = [];
  response: Response;

  constructor( private dogsService: DogsService ) { }

  ngOnInit(): void {
    this.dogsService
      .getAllDogBreeds()
      .subscribe((dogs: any) => {
        this.response = dogs;
        this.response.message.map((el, index) => {
          this.dog = { id: index, breed: el, picture: false };
          this.dogs.push(this.dog);
        });
        console.log(this.dogs);
      });
  }

}
