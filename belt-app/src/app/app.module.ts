import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { PetsComponent } from './pets/pets.component';
import { NewPetsFormComponent } from './new-pets-form/new-pets-form.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { EditPetFromComponent } from './edit-pet-from/edit-pet-from.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PetsComponent,
    NewPetsFormComponent,
    PetInfoComponent,
    EditPetFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
