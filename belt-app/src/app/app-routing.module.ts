import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PetsComponent } from './pets/pets.component';
import { NewPetsFormComponent } from './new-pets-form/new-pets-form.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { EditPetFromComponent } from './edit-pet-from/edit-pet-from.component';


const routes: Routes = [
  { path: "pets", component: PetsComponent},
  { path: "pets/new", component: NewPetsFormComponent},
  { path: "pets/:id", component: PetInfoComponent},
  { path: "pets/:id/edit", component: EditPetFromComponent},
  { path: "",component:AppComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
