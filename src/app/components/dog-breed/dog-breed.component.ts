import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/models/dog.interface';
import { Response } from 'src/app/models/response.interface';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dog-breed',
  templateUrl: './dog-breed.component.html',
  styleUrls: ['./dog-breed.component.css']
})
export class DogBreedComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  dog: Dog;
  dogs: Dog[] = [];
  response: Response;

  constructor(
    private dogsService: DogsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const breed = this.activatedRoute.snapshot.paramMap.get('breed');
    console.log('Breed -->', breed);

    this.dogsService.getDogByBreed(breed)
      .subscribe((dog: any) => {
        if (!dog) {
          return this.router.navigateByUrl('/');
        }
        this.response = dog;
        this.response.message.map((el, index) => {
          this.dog = { id: index, breed: breed, picture: el };
          this.dogs.push(this.dog);
        })

        console.log('Dog -->', this.dogs)
        this.dogsService.setSharedBreed(breed);
      });
  }

}
