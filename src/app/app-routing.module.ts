import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogBreedComponent } from './components/dog-breed/dog-breed.component';
import { DogBreedsComponent } from './components/dog-breeds/dog-breeds.component';

const routes: Routes = [
  { path: '', component: DogBreedsComponent },
  { path: 'breed/:breed', component: DogBreedComponent },
  { path: '**', component: DogBreedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
