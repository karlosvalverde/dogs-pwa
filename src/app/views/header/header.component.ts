import { Component, OnInit } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dogBreed: string;
  faDog = faDog;

  constructor( private dogsService: DogsService ) { }

  ngOnInit(): void {
    this.dogsService.sharedBreed.subscribe( breed => this.dogBreed = breed );
  }

}
